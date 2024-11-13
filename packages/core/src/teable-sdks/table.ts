import { AxiosInstance } from 'axios';

import { TeableFieldKeyType } from '../types';
import {
  IConvertFieldRo,
  ICreateRecordsRo,
  ICreateRecordsVo,
  IRecordsRo,
  IUpdateFieldRo,
  IViewVo,
} from './index';
import { ICreateFieldRo, IFieldVo, ITableTableVo, IViewRo } from './schemas';
import { assertResponse } from './util';
import { View } from './view';

export class Table {
  info: ITableTableVo;

  constructor(
    private client: AxiosInstance,
    info: ITableTableVo,
  ) {
    this.info = info;
  }

  get id(): string {
    return this.info.id;
  }

  get name() {
    return this.info.name;
  }

  get description() {
    return this.info.description;
  }

  get icon() {
    return this.info.icon;
  }

  get order() {
    return this.info.order;
  }

  get vo() {
    return this.info;
  }

  async createView(view: IViewRo) {
    const response = await this.client.post<IViewVo>(
      `/api/table/${this.id}/view`,
      {
        ...view,
      },
    );
    assertResponse(response);
    return new View(this.client, { ...response.data });
  }

  async createRecords(records: IRecordsRo) {
    const ro: ICreateRecordsRo = {
      fieldKeyType: TeableFieldKeyType.Name,
      typecast: true,
      records: records,
    };
    const response = await this.client.post<ICreateRecordsVo>(
      `/api/table/${this.id}/record`,
      ro,
    );
    assertResponse(response);
    return response.data.records;
  }

  async deleteRecords(recordIds: string[]) {
    const response = await this.client.delete<ICreateRecordsVo[]>(
      `/api/table/${this.id}/record`,
      {
        params: {
          recordIds,
        },
      },
    );
    assertResponse(response);
  }

  async createField(field: ICreateFieldRo) {
    const response = await this.client.post<IFieldVo>(
      `/api/table/${this.id}/field`,
      {
        ...field,
      },
    );
    assertResponse(response);
    return response.data;
  }

  async updateField(fieldId: string, field: IUpdateFieldRo) {
    const response = await this.client.patch<IFieldVo>(
      `/api/table/${this.id}/field/${fieldId}`,
      {
        ...field,
      },
    );
    assertResponse(response);
    return response.data;
  }

  async convertField(fieldId: string, field: IConvertFieldRo) {
    const response = await this.client.put<IFieldVo>(
      `/api/table/${this.id}/field/${fieldId}/convert`,
      {
        ...field,
      },
    );
    assertResponse(response);
    return response.data;
  }

  async getField(fieldId: string) {
    const response = await this.client.get<IFieldVo>(
      `/api/table/${this.id}/field/${fieldId}`,
    );
    assertResponse(response);
    return response.data;
  }
}
