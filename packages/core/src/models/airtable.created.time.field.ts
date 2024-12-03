import {
  defaultDatetimeFormatting,
  FieldType,
  IDateCellValue,
  IFieldRo,
} from '@teable/core';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

import { ITextCellValueVo } from '../airtable-sdks';
import { AirtableFieldVo } from './airtable.field.vo';

dayjs.extend(timezone);
dayjs.extend(utc);

export class AirtableCreatedTimeField extends AirtableFieldVo {
  transformTeableCreateRecordRo(value: ITextCellValueVo): IDateCellValue {
    return value;
  }

  transformTeableCreateFieldRo(): IFieldRo {
    return {
      type: FieldType.CreatedTime,
      name: this.name,
      dbFieldName: this.id,
      description: this.description,
      isLookup: false,
      options: {
        formatting: defaultDatetimeFormatting,
      },
    };
  }
}
