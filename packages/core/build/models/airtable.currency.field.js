import { TeableFieldType } from '@/types';
import { NumberFormattingType, } from '../teable-sdks';
import { AirtableFieldVo } from './airtable.field.vo';
export class AirtableCurrencyField extends AirtableFieldVo {
    transformTeableCreateRecordRo(value) {
        return value;
    }
    transformTeableCreateFieldRo() {
        let precision = 0;
        if (this.options.precision) {
            precision = this.options.precision > 5 ? 5 : this.options.precision;
        }
        return {
            type: TeableFieldType.Number,
            name: this.name,
            dbFieldName: this.id,
            description: this.description,
            isLookup: false,
            options: {
                formatting: {
                    type: NumberFormattingType.Currency,
                    precision: precision,
                    symbol: this.options.symbol,
                },
            },
        };
    }
}
