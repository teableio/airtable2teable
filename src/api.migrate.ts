import { AirtableSdk } from './airtable-sdks';
import { AirtableFieldVo, getAirtableField } from './models';
import { ICreateFieldRo, IRecordsRo, Table, TeableSdk } from './teable-sdks';
import {
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
    const newTables: Table[] = [];
    const aTid2tT: Record<string, Table> = {};
    let i = 1;
    for (const table of tables) {
      const airtableFieldsByIdMap = this.getAirtableFieldsMap(table);
      const teableFieldCreateRos: ICreateFieldRo[] = Object.values(
        airtableFieldsByIdMap,
      ).map((field) => field.transformTeableCreateFieldRo(tables, newTables));
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
}
