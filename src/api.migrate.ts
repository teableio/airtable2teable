import axios from 'axios';
import * as _ from 'lodash';

import {
  AirtableSdk,
  IAirtableFieldVo,
  IAirtableRecordVo,
  ICountFieldOptionsVo,
  IFormulaFieldOptionsVo,
  ILinkCellValueVo,
  ILinkFieldOptionsVo,
  ILookupFieldOptionsVo,
  IRollupFieldOptionsVo,
} from './airtable-sdks';
import { AirtableFieldVo, getAirtableField } from './models';
import {
  ICreateFieldRo,
  ILinkFieldOptions,
  IRecordsRo,
  ITableTableVo,
  Table,
  TeableSdk,
} from './teable-sdks';
import {
  AirtableFieldTypeEnum,
  IAirtableTable,
  TeableFieldKeyType,
  TeableFieldType,
  TeableViewTypeEnum,
} from './types';
import { fieldsTopologicalSorting, mappingTable } from './utils';

export class ApiMigrate {
  private teableSdk: TeableSdk;
  private airtableSdk: AirtableSdk;

  constructor(
    private readonly option: {
      from: {
        airtableToken: string;
        baseId: string;
      };
      to: {
        teableToken: string;
        spaceId: string;
      };
    },
  ) {
    this.teableSdk = new TeableSdk({
      token: option.to.teableToken,
    });
    this.airtableSdk = new AirtableSdk(option.from.airtableToken);
    axios.interceptors.response.use(
      function (response) {
        return response;
      },
      function (error) {
        return Promise.resolve(error.response);
      },
    );
  }

  async execute() {
    await this.generateTables();
  }

  /**
   * fields process:
   * 1. create non-computed fields (when create link field, if link table no exist, skip it).
   * 2. in sequence computed fields in sequence by topological sorting.
   *
   * records process:
   * 1. delete auto generated records.
   * 2. append records.
   */
  private async generateTables() {
    const space = await this.teableSdk.getSpace(this.option.to.spaceId);
    const base = await space.createBase({
      spaceId: space.id,
      name: new Date().toISOString(),
    });
    const tables = await this.airtableSdk.getTables(this.option.from.baseId);
    const fields = tables.flatMap((table) => table.fields);
    const fieldDependencies = fields
      .map((field) => this.fieldDependency(field))
      .filter((dependencies) => dependencies.length > 0)
      .flatMap((dependencies) => {
        return dependencies;
      });
    const lazy = _.uniq(
      fieldDependencies.map((fieldDependency) => fieldDependency[0]),
    );
    const newTables: ITableTableVo[] = [];
    const teableTables: Table[] = [];
    const recordIdMapping: Record<string, string> = {};
    let i = 1;
    for (const table of tables) {
      // condition: primary field
      const primaryFieldId = table.primaryFieldId;
      const airtableFields = table.fields.map((field) =>
        getAirtableField(field),
      );
      const appendingAirtableFields = airtableFields.filter((field) => {
        // condition: primary field
        if (field.id === primaryFieldId) {
          return true;
        }
        if (lazy.find((e) => e === field.id)) {
          return false;
        }
        if (field.type === AirtableFieldTypeEnum.MultipleRecordLinks) {
          const linkedTableId = (field.options as ILinkFieldOptionsVo)
            .linkedTableId;
          const newTable = mappingTable(tables, newTables, linkedTableId);
          if (!newTable) {
            return false;
          }
        }
        return true;
      });
      // condition: primary field
      for (let j = 0; j < appendingAirtableFields.length; j++) {
        const appendingAirtableField = appendingAirtableFields[j];
        if (appendingAirtableField.id === primaryFieldId) {
          const temp = appendingAirtableFields[0];
          appendingAirtableFields[0] = appendingAirtableField;
          appendingAirtableFields[j] = temp;
          break;
        }
      }
      const teableFieldCreateRos: ICreateFieldRo[] =
        appendingAirtableFields.map((field) =>
          field.transformTeableCreateFieldRo(tables, newTables),
        );
      let j = 1;
      const teableTable = await base.createTable({
        name: table.name,
        description: table.description,
        order: i++,
        views: table.views.map((view) => {
          return {
            name: view.name,
            type: TeableViewTypeEnum.Grid,
            order: j++,
            columnMeta: {},
          };
        }),
        fieldKeyType: TeableFieldKeyType.Name,
        fields: teableFieldCreateRos,
      });
      await teableTable.deleteRecords(
        teableTable.vo.records.map((record) => record.id),
      );
      teableTable.vo.records = [];
      const teableTableVo = teableTable.info;
      newTables.push(teableTableVo);
      teableTables.push(teableTable);
      await this.postLinkFieldsCreated(
        teableTable,
        teableTables,
        table,
        tables,
      );
    }
    await this.postTablesCreated(
      fieldDependencies,
      tables,
      teableTables,
      newTables,
    );
    for (const table of tables) {
      const teableTable = teableTables.find(
        (teableTable) => teableTable.name === table.name,
      )!;
      const airtableRecords = await this.airtableSdk.getRecords(table);
      const nonCalcAirtableFields = table.fields
        .filter(
          (field) =>
            field.type !== AirtableFieldTypeEnum.Count &&
            field.type !== AirtableFieldTypeEnum.Formula &&
            field.type !== AirtableFieldTypeEnum.Lookup &&
            field.type !== AirtableFieldTypeEnum.MultipleLookupValues,
        )
        .map((vo) => getAirtableField(vo));
      const teableRecordCreateRos = this.getRecordCreateRos(
        airtableRecords,
        nonCalcAirtableFields,
        recordIdMapping,
      );
      const records = await teableTable.createRecords(teableRecordCreateRos);
      for (let k = 0; k < airtableRecords.length; k++) {
        recordIdMapping[airtableRecords[k].id] = records[k].id;
      }
    }
  }

  private async postTablesCreated(
    fieldDependencies: [string, string][],
    tables: IAirtableTable[],
    teableTables: Table[],
    newTables: ITableTableVo[],
  ) {
    const fields = tables.flatMap((table) => table.fields);
    const sorting = fieldsTopologicalSorting(fieldDependencies);
    for (const airtableFieldId of sorting) {
      const airtableField = fields.find(
        (field) => field.id === airtableFieldId,
      )!;
      const airtableTable = tables.find(
        (table) => table.id === airtableField.tableId,
      )!;
      const teableTable = teableTables.find(
        (newTable) => newTable.name === airtableTable.name,
      )!;
      const teableField = teableTable.vo.fields.find(
        (field) => field.name === airtableField.name,
      );
      if (!teableField) {
        const airtableFieldModel = getAirtableField(airtableField);
        const newTeableField = airtableFieldModel.transformTeableCreateFieldRo(
          tables,
          newTables,
        );
        const field = await teableTable!.createField(newTeableField);
        teableTable.info.fields.push(field);
      }
      // condition: primary field
      const table = tables.find(
        (table) => table.id === airtableField?.tableId,
      )!;
      const primaryFieldId = table.primaryFieldId;
      if (
        primaryFieldId === airtableField.id &&
        airtableField.type === AirtableFieldTypeEnum.Formula
      ) {
        const newTable = mappingTable(tables, newTables, table.id)!;
        const referencedFieldIds =
          airtableField.options.referencedFieldIds || [];
        let formula = airtableField.options.formula;
        for (const referencedFieldId of referencedFieldIds) {
          const referencedField = table.fields.find(
            (field) => field.id === referencedFieldId,
          )!;
          const mappingReferencedField = newTable.fields.find(
            (field) => field.name === referencedField.name,
          )!;
          formula = formula.replace(
            referencedFieldId,
            mappingReferencedField.id,
          );
        }
        const covertField = await teableTable.convertField(teableField!.id, {
          type: TeableFieldType.Formula,
          options: {
            expression: formula,
          },
        });
        teableField!.options = covertField!.options;
      }
    }
  }

  private async postLinkFieldsCreated(
    teableTable: Table,
    teableTables: Table[],
    table: IAirtableTable,
    tables: IAirtableTable[],
  ) {
    const teableTableVo = teableTable.info;
    const linkFields = teableTableVo.fields
      .filter((field) => field.type === TeableFieldType.Link)
      .map((field) => field);
    for (const linkField of linkFields) {
      const options = linkField.options as ILinkFieldOptions;
      const foreignTableId = options.foreignTableId;
      const foreignTable = teableTables.find(
        (table) => table.id === foreignTableId,
      )!;
      const mappingField = table.fields.find(
        (field) => field.name === linkField.name,
      );
      const mappingFieldOptions = mappingField!.options as ILinkFieldOptionsVo;
      const mappingForeignTable = tables.find(
        (table) => table.id === mappingFieldOptions.linkedTableId,
      )!;
      const mappingInverseField = mappingForeignTable!.fields.find(
        (field) => field.id === mappingFieldOptions.inverseLinkFieldId,
      )!;
      const symmetricFieldId = options.symmetricFieldId!;
      const symmetricField = await foreignTable.getField(symmetricFieldId)!;
      if (symmetricField.name !== mappingInverseField!.name) {
        await foreignTable.updateField(symmetricFieldId, {
          name: mappingInverseField!.name,
        });
        symmetricField.name = mappingInverseField!.name;
      }
      foreignTable.info.fields.push(symmetricField);
    }
  }

  private getRecordCreateRos(
    airtableRecords: IAirtableRecordVo[],
    airtableFields: AirtableFieldVo[],
    recordIdMapping: Record<string, string>,
  ): IRecordsRo {
    return airtableRecords.map((record) => {
      const newRecord: Record<string, any> = {};
      for (const fieldName in record.fields) {
        const cellValue = record.fields[fieldName];
        const fieldModel = airtableFields.find(
          (field) => field.name === fieldName,
        )!;
        if (fieldModel) {
          if (fieldModel.type === AirtableFieldTypeEnum.MultipleRecordLinks) {
            if (cellValue) {
              const links = (cellValue as ILinkCellValueVo).map(
                (link) => recordIdMapping[link],
              );
              newRecord[fieldName] =
                fieldModel.transformTeableCreateRecordRo(links);
              continue;
            }
          }
          newRecord[fieldName] =
            fieldModel.transformTeableCreateRecordRo(cellValue);
        }
      }
      return {
        fields: newRecord,
      };
    });
  }

  /**
   *
   * @param field
   * @private [depended on, be depended on]
   */
  private fieldDependency(field: IAirtableFieldVo): [string, string][] | [] {
    if (field.type === AirtableFieldTypeEnum.Count && field.options.isValid) {
      return [
        [field.id, (field.options as ICountFieldOptionsVo).recordLinkFieldId!],
      ];
    } else if (
      field.type === AirtableFieldTypeEnum.Formula &&
      field.options.isValid
    ) {
      return (field.options as IFormulaFieldOptionsVo).referencedFieldIds!.map(
        (referencedFieldId) => {
          return [field.id, referencedFieldId];
        },
      );
    } else if (
      field.type === AirtableFieldTypeEnum.Rollup &&
      field.options.isValid
    ) {
      return [
        [field.id, (field.options as IRollupFieldOptionsVo).recordLinkFieldId!],
        ...(field.options as IRollupFieldOptionsVo).referencedFieldIds?.map(
          (referencedFieldId: string) => {
            return [field.id, referencedFieldId];
          },
        ),
      ];
    } else if (
      (field.type === AirtableFieldTypeEnum.Lookup ||
        field.type === AirtableFieldTypeEnum.MultipleLookupValues) &&
      field.options.isValid
    ) {
      return [
        [field.id, (field.options as ILookupFieldOptionsVo).recordLinkFieldId!],
        [
          field.id,
          (field.options as ILookupFieldOptionsVo).fieldIdInLinkedTable!,
        ],
      ];
    }
    return [];
  }
}
