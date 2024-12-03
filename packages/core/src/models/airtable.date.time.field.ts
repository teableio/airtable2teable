import {
  defaultDatetimeFormatting,
  FieldType,
  IDateCellValue,
  IFieldRo,
} from '@teable/core';

import { ITextCellValueVo } from '../airtable-sdks';
import { AirtableFieldVo } from './airtable.field.vo';

export class AirtableDateTimeField extends AirtableFieldVo {
  transformTeableCreateRecordRo(value: ITextCellValueVo): IDateCellValue {
    return value;
  }

  transformTeableCreateFieldRo(): IFieldRo {
    return {
      type: FieldType.Date,
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
