import { TeableFieldType } from '@/types';
import { AirtableFieldVo } from './airtable.field.vo';
export class AirtableAiTextField extends AirtableFieldVo {
    transformTeableCreateRecordRo(value) {
        return value.value;
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
