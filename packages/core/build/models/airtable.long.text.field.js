import { TeableFieldType } from '@/types';
import { AirtableFieldVo } from './airtable.field.vo';
export class AirtableLongTextField extends AirtableFieldVo {
    transformTeableCreateRecordRo(value) {
        return value;
    }
    transformTeableCreateFieldRo() {
        return {
            type: TeableFieldType.LongText,
            name: this.name,
            dbFieldName: this.id,
            isLookup: false,
            description: this.description,
            options: {},
        };
    }
}
