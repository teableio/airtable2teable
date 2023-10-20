import axios from 'axios';

import { ISdkConfig } from './index';
import { ICreateTableRo, IGetBaseVo, ITableFullVo } from './schemas';
import { Table } from './table';
import { assertResponse } from './util';

export class Base {
  constructor(
    private config: ISdkConfig,
    private info: IGetBaseVo,
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

  get order() {
    return this.info.order;
  }

  get icon() {
    return this.info.icon;
  }

  async createTable(table: ICreateTableRo) {
    console.log(table);
    const response = await axios.post<ITableFullVo>(
      `${this.config.host}/api/base/${this.id}/table`,
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
