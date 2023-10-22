import axios from 'axios';

import { AirtableLinkField, getAirtableField } from './models';
import { FieldKeyType, IFieldRo, Table, TeableSdk } from './teable-sdks';
import {
  AirtableField,
  AirtableFieldTypeEnum,
  IAirtableRecord,
  IAirtableTable,
} from './types';
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
    const migratedTableIds = new Set<string>();
    const tablesRecordIdsMap: Record<string, Record<string, string>> = {};
    let i = 1;
    for (const table of tables) {
      const records = recordsMap[table.id];
      const fieldsMap: Record<string, AirtableField> = {};
      const fields: IFieldRo[] = [];
      table.fields.forEach((field) => {
        let airtableDataModel: AirtableField;
        if (field.type === AirtableFieldTypeEnum.MultipleRecordLinks) {
          if (
            field.options?.linkedTableId &&
            migratedTableIds.has(field.options?.linkedTableId)
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
                linkedTableId: tablesMap[field.options.linkedTableId].id,
              },
            });
          } else {
            return;
          }
        } else {
          airtableDataModel = getAirtableField(field);
        }
        fieldsMap[field.name] = airtableDataModel;
        fields.push(airtableDataModel.transformTeableFieldCreateRo());
      });
      let j = 1;
      const newTable = await base.createTable({
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
            if (fieldModel) {
              if (
                fieldModel.type === AirtableFieldTypeEnum.MultipleRecordLinks
              ) {
                if (fieldModel.options?.linkedTableId) {
                  const recordIdsMap =
                    tablesRecordIdsMap[fieldModel.options.linkedTableId];
                  newRecord[fieldName] = (cellValue as string[]).map(
                    (recordId) => recordIdsMap[recordId],
                  );
                }
              } else {
                newRecord[fieldName] = fieldModel.getApiCellValue(cellValue);
              }
            }
          }
          return {
            fields: newRecord,
          };
        }),
      });
      const recordIdsMap: Record<string, string> = {};
      for (let k = 0; k < records.length; k++) {
        recordIdsMap[records[k].id] = newTable.vo.records[k].id;
      }
      tablesRecordIdsMap[newTable.id] = recordIdsMap;
      tablesMap[table.id] = newTable;
      migratedTableIds.add(table.id);
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
