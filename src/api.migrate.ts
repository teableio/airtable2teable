import axios from 'axios';

import { getAirtableField } from './models';
import { FieldKeyType, Table, TeableSdk } from './teable-sdks';
import { AirtableField, IAirtableRecord, IAirtableTable } from './types';
import { ViewMapper } from './util';

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
    // 1. Get airtable table meta.
    const tables = await this.getAirtableTables();
    const recordsMap = await this.getAirtableRecords(tables);
    const tablesMap: Record<string, Table> = {};
    let i = 1;
    for (const table of tables) {
      const records = recordsMap[table.id];
      const fieldsMap: Record<string, AirtableField> = {};
      const fields = table.fields.map((field) => {
        const airtableDataModel = getAirtableField(field);
        fieldsMap[field.name] = airtableDataModel;
        return airtableDataModel.transformTeableFieldCreateRo();
      });
      let j = 1;
      tablesMap[table.id] = await base.createTable({
        name: table.name,
        description: table.description,
        order: i++,
        views: table.views.map((view) => {
          return {
            name: view.name,
            type: ViewMapper[view.type] as any,
            order: j++,
          };
        }),
        fieldKeyType: FieldKeyType.Name,
        fields: fields,
        records: records.map((record) => {
          const newRecord: Record<string, any> = {};
          for (const fieldName in record.fields) {
            const cellValue = record.fields[fieldName];
            const fieldModel = fieldsMap[fieldName];
            newRecord[fieldName] = fieldModel.getApiCellValue(cellValue);
          }
          return {
            fields: newRecord,
          };
        }),
      });
    }
    return { tables, tablesMap };
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

  private async getAirtableRecords(tables: IAirtableTable[]) {
    const tableToRecords: Record<string, IAirtableRecord[]> = {};
    for (const table of tables) {
      const records: IAirtableRecord[] = [];
      let offset;
      do {
        const params = offset ? { offset } : {};
        const response = await axios.get<{
          offset?: string;
          records: IAirtableRecord[];
        }>(
          `https://api.airtable.com/v0/${this.option.from.baseId}/${table.id}`,
          {
            params: {
              ...params,
              maxRecords: 1000,
            },
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
        records.push(...response.data.records);
        offset = response.data.offset;
      } while (offset);
      tableToRecords[table.id] = records;
    }
    return tableToRecords;
  }
}
