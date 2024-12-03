import axios, { AxiosInstance } from 'axios';
import rateLimit from 'axios-rate-limit';

import { IAirtableTable } from '../types';
import { IAirtableRecordVo, IAirtableTableVo } from './schemas';

export * from './schemas';

export interface ISdkConfig {
  airtableToken: string;
  rps?: number;
}

export class AirtableSdk {
  private client: AxiosInstance;

  constructor(config: ISdkConfig) {
    this.client = rateLimit(
      axios.create({
        baseURL: 'https://api.airtable.com',
        headers: {
          Authorization: `Bearer ${config.airtableToken}`,
        },
      }),
      config.rps ? { maxRPS: config.rps } : {},
    );
  }

  async getTables(baseId: string): Promise<IAirtableTable[]> {
    const response = await this.client.get<{ tables: IAirtableTableVo[] }>(
      `/v0/meta/bases/${baseId}/tables`,
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
    const records: IAirtableRecordVo[] = [];
    let offset: string | undefined = '0';
    do {
      const response = await this.client.get<{
        offset?: string;
        records: IAirtableRecordVo[];
      }>(`/v0/${table.baseId}/${table.id}`, {
        params: {
          offset,
          maxRecords: 1000,
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
