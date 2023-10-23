import axios from 'axios';

import { AirtableLinkField, getAirtableField } from './models';
import {
  FieldKeyType,
  IFieldRo,
  IRecordsRo,
  Table,
  TeableSdk,
} from './teable-sdks';
import {
  AirtableField,
  AirtableFieldTypeEnum,
  IAirtableRecord,
  IAirtableTable,
  TeableViewTypeEnum,
} from './types';

export class ApiMigrate {
  private sdkTeable: TeableSdk;

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
    this.sdkTeable = new TeableSdk({
      token: option.to.teableToken,
    });
  }

  async execute() {
    await this.generateTables();
  }

  private async generateTables() {
    const space = await this.sdkTeable.getSpace(this.option.to.spaceId);
    const base = await space.createBase({
      spaceId: space.id,
      name: new Date().toISOString(),
    });
    const tables = await this.getAirtableTables();
    const teableTablesMap: Record<string, Table> = {};
    const migratedAirtableTableIds = new Set<string>();
    const teableTablesRecordIdsMap: Record<string, Record<string, string>> = {};
    let i = 1;
    for (const table of tables) {
      const airtableRecords = await this.getAirtableRecords(table);
      const airtableFieldsMap = this.getAirtableFieldsMap(
        table,
        migratedAirtableTableIds,
        teableTablesMap,
      );
      const teableFieldCreateRos: IFieldRo[] = Object.values(
        airtableFieldsMap,
      ).map((field) => field.transformTeableFieldCreateRo());
      let j = 1;
      const teableRecordCreateRos: IRecordsRo = this.getRecordCreateRos(
        airtableRecords,
        airtableFieldsMap,
        teableTablesRecordIdsMap,
      );
      const teableTable = await base.createTable({
        name: table.name,
        description: table.description,
        order: i++,
        views: table.views.map((view) => {
          return {
            name: view.name,
            type: TeableViewTypeEnum.Grid,
            order: j++,
          };
        }),
        fieldKeyType: FieldKeyType.Name,
        fields: teableFieldCreateRos,
        records: teableRecordCreateRos,
      });
      const a2tRecordIdMap: Record<string, string> = {};
      for (let k = 0; k < airtableRecords.length; k++) {
        a2tRecordIdMap[airtableRecords[k].id] = teableTable.vo.records[k].id;
      }
      teableTablesRecordIdsMap[teableTable.id] = a2tRecordIdMap;
      teableTablesMap[table.id] = teableTable;
      migratedAirtableTableIds.add(table.id);
    }
    return { tables, tablesMap: teableTablesMap };
  }

  private getRecordCreateRos(
    airtableRecords: IAirtableRecord[],
    airtableFieldsMap: Record<string, AirtableField>,
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
    table: any,
    migratedAirtableTableIds: Set<string>,
    teableTablesMap: Record<string, Table>,
  ): Record<string, AirtableField> {
    const airtableFieldsMap: Record<string, AirtableField> = {};
    table.fields.forEach((field) => {
      let airtableDataModel: AirtableField;
      if (field.type === AirtableFieldTypeEnum.MultipleRecordLinks) {
        if (
          field.options?.linkedTableId &&
          migratedAirtableTableIds.has(field.options?.linkedTableId)
        ) {
          airtableDataModel = new AirtableLinkField({
            id: field.id,
            name: field.name,
            description: field.description,
            type: AirtableFieldTypeEnum.MultipleRecordLinks,
            options: {
              isReversed: field.options.isReversed as boolean,
              prefersSingleRecordLink: field.options
                .prefersSingleRecordLink as boolean,
              linkedTableId: teableTablesMap[field.options.linkedTableId].id,
            },
          });
        } else {
          return;
        }
      } else {
        airtableDataModel = getAirtableField(field);
      }
      airtableFieldsMap[field.name] = airtableDataModel;
    });
    return airtableFieldsMap;
  }

  private async getAirtableTables() {
    const response = await axios.get<{ tables: IAirtableTable[] }>(
      `https://api.airtable.com/v0/meta/bases/${this.option.from.baseId}/tables`,
      {
        headers: {
          Authorization: `Bearer ${this.option.from.airtableToken}`,
        },
      },
    );
    if (response.status !== 200) {
      throw new Error(
        `Response Status: ${response.status}, Response Message: ${response.statusText}`,
      );
    }
    return response.data.tables;
  }

  private async getAirtableRecords(table: IAirtableTable) {
    const records: IAirtableRecord[] = [];
    let offset = '0';
    do {
      const response = await axios.get<{
        offset?: string;
        records: IAirtableRecord[];
      }>(`https://api.airtable.com/v0/${this.option.from.baseId}/${table.id}`, {
        params: {
          offset,
          maxRecords: 1000,
        },
        headers: {
          Authorization: `Bearer ${this.option.from.airtableToken}`,
        },
      });
      if (response.status !== 200) {
        throw new Error(
          `Response Status: ${response.status}, Response Message: ${response.statusText}`,
        );
      }
      records.push(...response.data.records);
      offset = response.data.offset;
    } while (offset);
    return records;
  }
}
