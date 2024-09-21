import { TeableFieldType } from '@/types';
import { AirtableFieldVo } from './airtable.field.vo';
export class AirtableRollupField extends AirtableFieldVo {
    transformTeableCreateRecordRo(value) {
        return value;
    }
    transformTeableCreateFieldRo() {
        return {
            type: TeableFieldType.SingleLineText,
            name: this.name,
            dbFieldName: this.id,
            description: this.description,
            isLookup: false,
            options: {},
        };
    }
}
