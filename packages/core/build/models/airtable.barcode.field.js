import { TeableFieldType } from '@/types';
import { AirtableFieldVo } from './airtable.field.vo';
export class AirtableBarcodeField extends AirtableFieldVo {
    transformTeableCreateRecordRo(value) {
        return value.text;
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
