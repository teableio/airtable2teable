import axios from 'axios';

import { Space } from './space';
import { IGetSpaceVo } from './types';
import { assertResponse } from './util';

export * from './base';
export * from './space';
export * from './table';

export interface ISdkConfig {
  token: string;
  host?: string;
}

export class TeableSdk {
  constructor(private config: ISdkConfig) {
    this.config.host = config.host || 'https://dev.teable.io';
  }

  async getSpaces(): Promise<Space[]> {
    const response = await axios.get<IGetSpaceVo[]>(
      `${this.config.host}/api/space`,
      {
        headers: {
          Authorization: `Bearer ${this.config.token}`,
        },
      },
    );
    assertResponse(response);
    const spaceVos = response.data;
    return spaceVos.map(
      (vo) => new Space(this.config, { id: vo.id, name: vo.name }),
    );
  }

  async getSpace(spaceId: string): Promise<Space> {
    const response = await axios.get<IGetSpaceVo>(
      `${this.config.host}/api/space/${spaceId}`,
      {
        headers: {
          Authorization: `Bearer ${this.config.token}`,
        },
      },
    );
    assertResponse(response);
    const vo = response.data;
    return new Space(this.config, { id: vo.id, name: vo.name });
  }
}
