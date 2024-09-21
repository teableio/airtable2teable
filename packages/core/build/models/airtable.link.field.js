import { TeableFieldType, TeableRelationship } from '@/types';
import { mappingTable } from '../utils';
import { AirtableFieldVo } from './airtable.field.vo';
export class AirtableLinkField extends AirtableFieldVo {
    transformTeableCreateRecordRo(value) {
        if (this.options.prefersSingleRecordLink) {
            return value[0]
                ? {
                    id: value[0],
                }
                : [];
        }
        return (value?.map((link) => {
            return {
                id: link,
            };
        }) || []);
    }
    transformTeableCreateFieldRo(tables, newTables) {
        const fields = tables
            .map((table) => table.fields)
            .flatMap((field) => field);
        const inverseLinkFieldId = this.options.inverseLinkFieldId;
        const inverseLinkField = fields.find((field) => field.id === inverseLinkFieldId);
        if (!inverseLinkField) {
            throw new Error('Inverse Link Field No Exist.');
        }
        const inverseLinkFieldOptions = inverseLinkField.options;
        let relationship;
        if (inverseLinkFieldOptions.prefersSingleRecordLink &&
            this.options.prefersSingleRecordLink) {
            relationship = TeableRelationship.OneOne;
        }
        else if (!inverseLinkFieldOptions.prefersSingleRecordLink &&
            !this.options.prefersSingleRecordLink) {
            relationship = TeableRelationship.ManyMany;
        }
        else if (this.options.prefersSingleRecordLink) {
            relationship = TeableRelationship.ManyOne;
        }
        else {
            relationship = TeableRelationship.OneMany;
        }
        const newTable = mappingTable(tables, newTables, this.options.linkedTableId);
        return {
            type: TeableFieldType.Link,
            name: this.name,
            dbFieldName: this.id,
            description: this.description,
            isLookup: false,
            options: {
                relationship,
                foreignTableId: newTable.id,
            },
        };
    }
}
