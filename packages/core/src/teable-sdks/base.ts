import { AxiosInstance } from 'axios';

import { ICreateBaseVo } from './index';
import { ICreateTableRo, ITableTableVo } from './schemas';
import { Table } from './table';
import { assertResponse } from './util';

export class Base {
  constructor(
    private client: AxiosInstance,
    private info: ICreateBaseVo,
  ) {}

  get id() {
    return this.info.id;
  }

  get name() {
    return this.info.name;
  }

  get spaceId() {
    return this.info.spaceId;
  }

  async createTable(table: ICreateTableRo) {
    const response = await this.client.post<ITableTableVo>(
      `/api/base/${this.id}/table`,
      {
        ...table,
      },
    );
    assertResponse(response);
    return new Table(this.client, { ...response.data });
  }
}
