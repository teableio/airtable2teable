import axios from 'axios';

import { Base } from './base';
import { ISdkConfig } from './index';
import { ICreateBaseRo, ICreateBaseVo, IGetSpaceVo } from './schemas';
import { assertResponse } from './util';

export class Space {
  constructor(
    private config: ISdkConfig,
    private info: IGetSpaceVo,
  ) {}

  get id() {
    return this.info.id;
  }

  get name() {
    return this.info.name;
  }

  async createBase(base: ICreateBaseRo) {
    const response = await axios.post<ICreateBaseVo>(
      `${this.config.host}/api/base`,
      {
        ...base,
      },
      {
        headers: {
          Authorization: `Bearer ${this.config.token}`,
        },
      },
    );
    assertResponse(response);
    return new Base(this.config, { ...response.data });
  }
}
