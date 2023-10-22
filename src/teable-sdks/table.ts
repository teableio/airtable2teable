import axios from 'axios';

import { ISdkConfig } from './index';
import { ITableFullVo, IViewRo } from './schemas';
import { assertResponse } from './util';
import { View } from './view';

export class Table {
  constructor(
    private config: ISdkConfig,
    private info: ITableFullVo,
  ) {}

  get id() {
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
    const response = await axios.post<ITableFullVo>(
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
}
