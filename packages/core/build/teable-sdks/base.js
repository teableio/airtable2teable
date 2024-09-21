import axios from 'axios';
import { Table } from './table';
import { assertResponse } from './util';
export class Base {
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
    get spaceId() {
        return this.info.spaceId;
    }
    async createTable(table) {
        const response = await axios.post(`${this.config.baseUrl}/api/base/${this.id}/table`, {
            ...table,
        }, {
            headers: {
                Authorization: `Bearer ${this.config.token}`,
            },
        });
        assertResponse(response);
        return new Table(this.config, { ...response.data });
    }
}
