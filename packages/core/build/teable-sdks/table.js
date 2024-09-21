import axios from 'axios';
import { TeableFieldKeyType } from '../types';
import { assertResponse } from './util';
import { View } from './view';
export class Table {
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
    async createView(view) {
        const response = await axios.post(`${this.config.baseUrl}/api/table/${this.id}/view`, {
            ...view,
        }, {
            headers: {
                Authorization: `Bearer ${this.config.token}`,
            },
        });
        assertResponse(response);
        return new View(this.config, { ...response.data });
    }
    async createRecords(records) {
        const ro = {
            fieldKeyType: TeableFieldKeyType.Name,
            typecast: true,
            records: records,
        };
        const response = await axios.post(`${this.config.baseUrl}/api/table/${this.id}/record`, ro, {
            headers: {
                Authorization: `Bearer ${this.config.token}`,
            },
        });
        assertResponse(response);
        return response.data.records;
    }
    async deleteRecords(recordIds) {
        const response = await axios.delete(`${this.config.baseUrl}/api/table/${this.id}/record`, {
            params: {
                recordIds,
            },
            headers: {
                Authorization: `Bearer ${this.config.token}`,
            },
        });
        assertResponse(response);
    }
    async createField(field) {
        const response = await axios.post(`${this.config.baseUrl}/api/table/${this.id}/field`, {
            ...field,
        }, {
            headers: {
                Authorization: `Bearer ${this.config.token}`,
            },
        });
        assertResponse(response);
        return response.data;
    }
    async updateField(fieldId, field) {
        const response = await axios.patch(`${this.config.baseUrl}/api/table/${this.id}/field/${fieldId}`, {
            ...field,
        }, {
            headers: {
                Authorization: `Bearer ${this.config.token}`,
            },
        });
        assertResponse(response);
        return response.data;
    }
    async convertField(fieldId, field) {
        const response = await axios.put(`${this.config.baseUrl}/api/table/${this.id}/field/${fieldId}/convert`, {
            ...field,
        }, {
            headers: {
                Authorization: `Bearer ${this.config.token}`,
            },
        });
        assertResponse(response);
        return response.data;
    }
    async getField(fieldId) {
        const response = await axios.get(`${this.config.baseUrl}/api/table/${this.id}/field/${fieldId}`, {
            headers: {
                Authorization: `Bearer ${this.config.token}`,
            },
        });
        assertResponse(response);
        return response.data;
    }
}
