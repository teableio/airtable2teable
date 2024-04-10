import * as dayjs from 'dayjs';
import * as timezone from 'dayjs/plugin/timezone';
import * as utc from 'dayjs/plugin/utc';
import { TeableFieldType } from 'types';

import { IDateFieldOptionsVo, ITextCellValueVo } from '../airtable-sdks';
import {
  defaultDatetimeFormatting,
  ICreateFieldRo,
  IDateCellValue,
} from '../teable-sdks';
import { AirtableFieldVo } from './airtable.field.vo';

dayjs.extend(timezone);
dayjs.extend(utc);

export class AirtableDateField extends AirtableFieldVo {
  options: IDateFieldOptionsVo;

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
        // todo: mark
        formatting: defaultDatetimeFormatting,
        defaultValue: 'now',
      },
    };
  }
}
