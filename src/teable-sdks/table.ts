import axios from 'axios';

import { ICreateRecordsVo, IRecordsRo, ISdkConfig, IViewVo } from './index';
import { IFieldRo, IFieldVo, ITableFullVo, IViewRo } from './schemas';
import { assertResponse } from './util';
import { View } from './view';

export class Table {
  constructor(
    private config: ISdkConfig,
    private info: ITableFullVo,
  ) {}

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
    const response = await axios.post<IViewVo>(
      `${this.config.host}/api/table/${this.id}/view`,
      {
        ...view,
      },
      {
        headers: {
          Authorization: `Bearer ${this.config.token}`,
        },
      },
    );
    assertResponse(response);
    return new View(this.config, { ...response.data });
  }

  async createRecords(records: IRecordsRo) {
    const response = await axios.post<ICreateRecordsVo>(
      `${this.config.host}/api/table/${this.id}/record`,
      {
        fieldKeyType: 'name',
        typecast: true,
        records: records,
      },
      {
        headers: {
          Authorization: `Bearer ${this.config.token}`,
        },
      },
    );
    assertResponse(response);
    return response.data;
  }

  async deleteRecords(recordIds: string[]) {
    const response = await axios.delete<ICreateRecordsVo[]>(
      `${this.config.host}/api/table/${this.id}/record`,
      {
        params: {
          recordIds,
        },
        headers: {
          Authorization: `Bearer ${this.config.token}`,
        },
      },
    );
    assertResponse(response);
  }

  async createField(field: IFieldRo) {
    const response = await axios.post<IFieldVo>(
      `${this.config.host}/api/table/${this.id}/field`,
      {
        ...field,
      },
      {
        headers: {
          Authorization: `Bearer ${this.config.token}`,
        },
      },
    );
    assertResponse(response);
    return response.data;
  }
}
