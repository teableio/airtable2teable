import axios, { AxiosInstance } from 'axios';
import rateLimit from 'axios-rate-limit';

import { IGetSpaceVo } from './schemas';
import { Space } from './space';
import { assertResponse } from './util';

export * from './base';
export * from './schemas';
export * from './space';
export * from './table';

export interface ISdkConfig {
  token: string;
  baseUrl?: string;
  rps?: number;
}

export class TeableSdk {
  private client: AxiosInstance;

  constructor(config: ISdkConfig) {
    const baseUrl =
      config.baseUrl || process.env.TEABLE_BASE_URL || 'https://app.teable.io';
    const rps = config.rps;
    this.client = rateLimit(
      axios.create({
        baseURL: baseUrl,
        headers: {
          Authorization: `Bearer ${config.token}`,
        },
      }),
      rps
        ? {
            maxRequests: rps,
            perMilliseconds: 1000,
            maxRPS: rps,
          }
        : {},
    );
  }

  async getSpaces(): Promise<Space[]> {
    const response = await this.client.get<IGetSpaceVo[]>(`/api/space`, {});
    assertResponse(response);
    const spaceVos = response.data;
    return spaceVos.map(
      (vo) => new Space(this.client, { id: vo.id, name: vo.name }),
    );
  }

  async getSpace(spaceId: string): Promise<Space> {
    const response = await this.client.get<IGetSpaceVo>(
      `/api/space/${spaceId}`,
    );
    assertResponse(response);
    const vo = response.data;
    return new Space(this.client, { id: vo.id, name: vo.name });
  }
}
