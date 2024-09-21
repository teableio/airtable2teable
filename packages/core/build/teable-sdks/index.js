import axios from 'axios';
import * as https from 'https';
import { Space } from './space';
import { assertResponse } from './util';
export * from './base';
export * from './schemas';
export * from './space';
export * from './table';
export class TeableSdk {
    config;
    constructor(config) {
        this.config = config;
        this.config.baseUrl =
            config.baseUrl || process.env.TEABLE_BASE_URL || 'https://app.teable.io';
    }
    async getSpaces() {
        const response = await axios.get(`${this.config.baseUrl}/api/space`, {
            headers: {
                Authorization: `Bearer ${this.config.token}`,
            },
            httpsAgent: new https.Agent({
                rejectUnauthorized: false,
            }),
        });
        assertResponse(response);
        const spaceVos = response.data;
        return spaceVos.map((vo) => new Space(this.config, { id: vo.id, name: vo.name }));
    }
    async getSpace(spaceId) {
        const response = await axios.get(`${this.config.baseUrl}/api/space/${spaceId}`, {
            headers: {
                Authorization: `Bearer ${this.config.token}`,
            },
        });
        assertResponse(response);
        const vo = response.data;
        return new Space(this.config, { id: vo.id, name: vo.name });
    }
}
