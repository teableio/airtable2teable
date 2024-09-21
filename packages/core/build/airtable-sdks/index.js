import axios from 'axios';
export * from './schemas';
export class AirtableSdk {
    airtableToken;
    constructor(airtableToken) {
        this.airtableToken = airtableToken;
    }
    async getTables(baseId) {
        const response = await axios.get(`https://api.airtable.com/v0/meta/bases/${baseId}/tables`, {
            headers: {
                Authorization: `Bearer ${this.airtableToken}`,
            },
        });
        if (response.status !== 200) {
            throw new Error(`Response Status: ${response.status}, Response Message: ${response.statusText}`);
        }
        return response.data.tables.map((e) => {
            return {
                baseId: baseId,
                ...e,
                fields: e.fields.map((field) => {
                    return {
                        tableId: e.id,
                        ...field,
                    };
                }),
            };
        });
    }
    async getRecords(table) {
        const records = [];
        let offset = '0';
        do {
            const response = await axios.get(`https://api.airtable.com/v0/${table.baseId}/${table.id}`, {
                params: {
                    offset,
                    maxRecords: 1000,
                },
                headers: {
                    Authorization: `Bearer ${this.airtableToken}`,
                },
            });
            if (response.status !== 200) {
                throw new Error(`Response Status: ${response.status}, Response Message: ${response.statusText}`);
            }
            records.push(...response.data.records);
            offset = response.data.offset;
        } while (offset);
        return records;
    }
}
