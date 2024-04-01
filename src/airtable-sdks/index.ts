import axios from 'axios';

import { IAirtableRecord, IAirtableTable } from '../types';
import { IAirtableTableVo } from './schemas';

export * from './schemas';

export class AirtableSdk {
  private airtableToken: string;

  constructor(airtableToken: string) {
    this.airtableToken = airtableToken;
  }

  async getTables(baseId: string): Promise<IAirtableTable[]> {
    const response = await axios.get<{ tables: IAirtableTableVo[] }>(
      `https://api.airtable.com/v0/meta/bases/${baseId}/tables`,
      {
        headers: {
          Authorization: `Bearer ${this.airtableToken}`,
        },
      },
    );
    if (response.status !== 200) {
      throw new Error(
        `Response Status: ${response.status}, Response Message: ${response.statusText}`,
      );
    }
    return response.data.tables.map((e: IAirtableTableVo) => {
      return {
        baseId: baseId,
        ...e,
        fields: e.fields.map((field) => {
          return {
            tableId: e.id,
            ...field,
          };
        }),
      };
    });
  }

  async getRecords(table: IAirtableTable) {
    const records: IAirtableRecord[] = [];
    let offset: string | undefined = '0';
    do {
      const response = await axios.get<{
        offset?: string;
        records: IAirtableRecord[];
      }>(`https://api.airtable.com/v0/${table.baseId}/${table.id}`, {
        params: {
          offset,
          maxRecords: 1000,
        },
        headers: {
          Authorization: `Bearer ${this.airtableToken}`,
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
