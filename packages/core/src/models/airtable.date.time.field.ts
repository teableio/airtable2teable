import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

import { TeableFieldType } from '@/types';

import { ITextCellValueVo } from '../airtable-sdks';
import {
  defaultDatetimeFormatting,
  ICreateFieldRo,
  IDateCellValue,
} from '../teable-sdks';
import { AirtableFieldVo } from './airtable.field.vo';

dayjs.extend(timezone);
dayjs.extend(utc);

export class AirtableDateTimeField extends AirtableFieldVo {
  transformTeableCreateRecordRo(value: ITextCellValueVo): IDateCellValue {
    return value;
  }

  transformTeableCreateFieldRo(): ICreateFieldRo {
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
