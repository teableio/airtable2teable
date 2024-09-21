import * as dayjs from 'dayjs';
import * as timezone from 'dayjs/plugin/timezone';
import * as utc from 'dayjs/plugin/utc';
import { TeableFieldType } from '@/types';
import { defaultDatetimeFormatting, } from '../teable-sdks';
import { AirtableFieldVo } from './airtable.field.vo';
dayjs.extend(timezone);
dayjs.extend(utc);
export class AirtableDateField extends AirtableFieldVo {
    transformTeableCreateRecordRo(value) {
        return value;
    }
    transformTeableCreateFieldRo() {
        return {
            type: TeableFieldType.Date,
            name: this.name,
            dbFieldName: this.id,
            description: this.description,
            isLookup: false,
            options: {
                formatting: defaultDatetimeFormatting,
                defaultValue: 'now',
            },
        };
    }
}
