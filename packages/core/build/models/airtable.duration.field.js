import { TeableFieldType } from '@/types';
import { NumberFormattingType, } from '../teable-sdks';
import { AirtableFieldVo } from './airtable.field.vo';
export class AirtableDurationField extends AirtableFieldVo {
    transformTeableCreateRecordRo(value) {
        return value;
    }
    transformTeableCreateFieldRo() {
        return {
            type: TeableFieldType.Number,
            name: this.name,
            dbFieldName: this.id,
            description: this.description,
            isLookup: false,
            options: {
                formatting: {
                    type: NumberFormattingType.Decimal,
                    precision: 0,
                },
            },
        };
    }
}
