import { TeableFieldType } from '@/types';
import { AirtableFieldVo } from './airtable.field.vo';
export class AirtableAutoNumberField extends AirtableFieldVo {
    transformTeableCreateRecordRo(value) {
        return value;
    }
    transformTeableCreateFieldRo() {
        return {
            type: TeableFieldType.AutoNumber,
            name: this.name,
            dbFieldName: this.id,
            description: this.description,
            isLookup: false,
            options: {
                expression: 'AUTO_NUMBER()',
            },
        };
    }
}
