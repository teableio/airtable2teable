import { TeableFieldType } from '@/types';
import { mappingTable } from '../utils';
import { AirtableFieldVo } from './airtable.field.vo';
export class AirtableFormulaField extends AirtableFieldVo {
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
        const primaryFieldId = table.primaryFieldId;
        if (primaryFieldId === this.id) {
            return {
                type: TeableFieldType.Formula,
                name: this.name,
                dbFieldName: this.id,
                description: this.description,
                isLookup: false,
                options: {
                    expression: 'RECORD_ID()',
                },
            };
        }
        const referencedFieldIds = this.options.referencedFieldIds || [];
        let formula = this.options.formula;
        const newTable = mappingTable(tables, newTables, table.id);
        for (const referencedFieldId of referencedFieldIds) {
            const referencedField = table.fields.find((field) => field.id === referencedFieldId);
            const mappingReferencedField = newTable.fields.find((field) => field.name === referencedField.name);
            formula = formula.replace(referencedFieldId, mappingReferencedField.id);
        }
        return {
            type: TeableFieldType.Formula,
            name: this.name,
            dbFieldName: this.id,
            description: this.description,
            isLookup: false,
            options: {
                expression: formula,
            },
        };
    }
}
