import axios from 'axios';
import * as https from 'https';

import { IGetSpaceVo } from './schemas';
import { Space } from './space';
import { assertResponse } from './util';

export * from './base';
export * from './schemas';
export * from './space';
export * from './table';

export interface ISdkConfig {
  token: string;
  host?: string;
}

export class TeableSdk {
  constructor(private config: ISdkConfig) {
    this.config.host = config.host || process.env.TEABLE_HOST;
  }

  async getSpaces(): Promise<Space[]> {
    const response = await axios.get<IGetSpaceVo[]>(
      `${this.config.host}/api/space`,
      {
        headers: {
          Authorization: `Bearer ${this.config.token}`,
        },
        httpsAgent: new https.Agent({
          rejectUnauthorized: false,
        }),
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
