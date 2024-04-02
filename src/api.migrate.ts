import * as _ from 'lodash';

import {
  AirtableSdk,
  IAirtableFieldVo,
  ICountFieldOptionsVo,
  IFormulaFieldOptionsVo,
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
  IAirtableRecord,
  TeableFieldKeyType,
  TeableFieldType,
  TeableViewTypeEnum,
} from './types';
import { mappingTable } from './utils/table.util';

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
  }

  async execute() {
    await this.generateTables();
  }

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
    let i = 1;
    for (const table of tables) {
      const airtableFields = table.fields.map((field) =>
        getAirtableField(field),
      );
      const teableFieldCreateRos: ICreateFieldRo[] = airtableFields
        .filter((field) => {
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
        })
        .map((field) => field.transformTeableCreateFieldRo(tables, newTables));
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
      const teableTableVo = teableTable.info;
      newTables.push(teableTableVo);
      teableTables.push(teableTable);
      const linkFields = teableTableVo.fields
        .filter((field) => field.type === TeableFieldType.Link)
        .map((field) => field);
      for (const linkField of linkFields) {
        const options = linkField.options as ILinkFieldOptions;
        const foreignTableId = options.foreignTableId;
        const foreignTable = teableTables.find(
          (table) => table.id === foreignTableId,
        );
        const mappingField = table.fields.find(
          (field) => field.name === linkField.name,
        );
        const mappingFieldOptions = mappingField!
          .options as ILinkFieldOptionsVo;
        const mappingForeignTable = tables.find(
          (table) => table.id === mappingFieldOptions.linkedTableId,
        );
        const mappingInverseField = mappingForeignTable!.fields.find(
          (field) => field.id === mappingFieldOptions.inverseLinkFieldId,
        );
        const symmetricFieldId = options.symmetricFieldId!;
        await foreignTable!.updateField(symmetricFieldId, {
          name: mappingInverseField!.name,
        });
      }
    }
  }

  private getRecordCreateRos(
    airtableRecords: IAirtableRecord[],
    airtableFieldsMap: Record<string, AirtableFieldVo>,
    teableTablesRecordIdsMap: Record<string, Record<string, string>>,
  ): IRecordsRo {
    return airtableRecords.map((record) => {
      const newRecord: Record<string, any> = {};
      for (const fieldName in record.fields) {
        const cellValue = record.fields[fieldName];
        const fieldModel = airtableFieldsMap[fieldName];
        if (fieldModel) {
          newRecord[fieldName] = fieldModel.getApiCellValue(
            cellValue,
            teableTablesRecordIdsMap,
          );
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
