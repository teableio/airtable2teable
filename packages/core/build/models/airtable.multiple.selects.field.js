import { TeableFieldType } from '@/types';
import { AirtableFieldVo } from './airtable.field.vo';
export class AirtableMultipleSelectsField extends AirtableFieldVo {
    transformTeableCreateRecordRo(value) {
        return value;
    }
    transformTeableCreateFieldRo() {
        return {
            type: TeableFieldType.MultipleSelect,
            name: this.name,
            dbFieldName: this.id,
            description: this.description,
            isLookup: false,
            options: {
                choices: this.options?.choices || [],
            },
        };
    }
}
