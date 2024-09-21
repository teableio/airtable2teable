import axios from 'axios';
import { Base } from './base';
import { assertResponse } from './util';
export class Space {
    config;
    info;
    constructor(config, info) {
        this.config = config;
        this.info = info;
    }
    get id() {
        return this.info.id;
    }
    get name() {
        return this.info.name;
    }
    async createBase(base) {
        const response = await axios.post(`${this.config.baseUrl}/api/base`, {
            ...base,
        }, {
            headers: {
                Authorization: `Bearer ${this.config.token}`,
            },
        });
        assertResponse(response);
        return new Base(this.config, { ...response.data });
    }
}
