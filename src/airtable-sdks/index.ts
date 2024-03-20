import axios from 'axios';

import { IAirtableRecord, IAirtableTable } from '../types';

export * from './fields';

export class AirtableSdk {
  private airtableToken: string;

  constructor(airtableToken: string) {
    this.airtableToken = airtableToken;
  }

  async getTables(baseId: string) {
    const response = await axios.get<{ tables: IAirtableTable[] }>(
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
    return response.data.tables?.map((e) => {
      return {
        baseId: baseId,
        ...e,
      };
    });
  }

  async getRecords(table: IAirtableTable) {
    const records: IAirtableRecord[] = [];
    let offset = '0';
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
