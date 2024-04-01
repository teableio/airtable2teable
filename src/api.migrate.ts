import * as _ from 'lodash';

import {
  AirtableSdk,
  IAirtableFieldVo,
  ICountFieldOptionsVo,
  IFormulaFieldOptionsVo,
  IRollupFieldOptionsVo,
} from './airtable-sdks';
import { AirtableFieldVo, getAirtableField } from './models';
import { ICreateFieldRo, IRecordsRo, Table, TeableSdk } from './teable-sdks';
import {
  AirtableFieldTypeEnum,
  IAirtableRecord,
  IAirtableTable,
  TeableFieldKeyType,
  TeableViewTypeEnum,
} from './types';

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
    const lazy = _.unique(
      fieldDependencies.map((fieldDependency) => fieldDependency[0]),
    );
    const newTables: Table[] = [];
    const aTid2tT: Record<string, Table> = {};
    let i = 1;
    for (const table of tables) {
      const airtableFieldsByIdMap = this.getAirtableFieldsMap(table);
      const teableFieldCreateRos: ICreateFieldRo[] = Object.values(
        airtableFieldsByIdMap,
      )
        .filter((field) => !lazy.find((e) => e === field.id))
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
      newTables.push(teableTable);
    }
    return { tables, tablesMap: aTid2tT };
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

  private getAirtableFieldsMap(
    table: IAirtableTable,
  ): Record<string, AirtableFieldVo> {
    const airtableFieldsMap: Record<string, AirtableFieldVo> = {};
    table.fields.forEach((field) => {
      airtableFieldsMap[field.id] = getAirtableField(field);
    });
    return airtableFieldsMap;
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
    }
    return [];
  }
}
