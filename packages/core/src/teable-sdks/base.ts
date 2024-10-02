import axios from 'axios';

import { ICreateBaseVo, ISdkConfig } from './index';
import { ICreateTableRo, ITableTableVo } from './schemas';
import { Table } from './table';
import { assertResponse } from './util';

export class Base {
  constructor(
    private config: ISdkConfig,
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
    const response = await axios.post<ITableTableVo>(
      `${this.config.baseUrl}/api/base/${this.id}/table`,
      {
        ...table,
      },
      {
        headers: {
          Authorization: `Bearer ${this.config.token}`,
        },
      },
    );
    assertResponse(response);
    return new Table(this.config, { ...response.data });
  }
}
