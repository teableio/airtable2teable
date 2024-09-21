import { TeableFieldType } from '@/types';
import { mappingTable } from '../utils';
import { AirtableFieldVo } from './airtable.field.vo';
export class AirtableLookupField extends AirtableFieldVo {
    transformTeableCreateRecordRo(value) {
        return value;
    }
    transformTeableCreateFieldRo(tables, newTables) {
        if (!this.options.isValid) {
            return {
                type: TeableFieldType.SingleLineText,
                name: this.name,
                dbFieldName: this.id,
                description: this.description,
                isLookup: false,
                options: {},
            };
        }
        const table = tables.find((table) => table.id === this.tableId);
        const newTable = newTables.find((newTable) => table.name === newTable.name);
        const recordLinkField = table.fields.find((field) => field.id === this.options.recordLinkFieldId);
        const mappingRecordLinkField = newTable.fields.find((field) => field.name === recordLinkField.name);
        const lookupFieldId = this.options.fieldIdInLinkedTable;
        let lookupField;
        const foreignTable = tables.find((table) => {
            lookupField = table.fields.find((field) => field.id === lookupFieldId);
            return !!lookupField;
        });
        const mappingForeignTable = mappingTable(tables, newTables, foreignTable.id);
        const mappingLookupField = mappingForeignTable.fields.find((field) => field.name === lookupField.name);
        return {
            name: this.name,
            dbFieldName: this.id,
            description: this.description,
            type: mappingLookupField.type,
            options: mappingLookupField.options,
            isLookup: true,
            lookupOptions: {
                foreignTableId: mappingForeignTable.id,
                lookupFieldId: mappingLookupField.id,
                linkFieldId: mappingRecordLinkField.id,
            },
        };
    }
}
