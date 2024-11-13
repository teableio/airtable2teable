import { AxiosInstance } from 'axios';

import { Base } from './base';
import { ICreateBaseRo, ICreateBaseVo, IGetSpaceVo } from './schemas';
import { assertResponse } from './util';

export class Space {
  constructor(
    private client: AxiosInstance,
    private info: IGetSpaceVo,
  ) {}

  get id() {
    return this.info.id;
  }

  get name() {
    return this.info.name;
  }

  async createBase(base: ICreateBaseRo) {
    const response = await this.client.post<ICreateBaseVo>(`/api/base`, {
      ...base,
    });
    assertResponse(response);
    return new Base(this.client, { ...response.data });
  }
}
