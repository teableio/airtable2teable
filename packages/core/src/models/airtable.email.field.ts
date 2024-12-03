import {
  FieldType,
  IFieldRo,
  ISingleLineTextCellValue,
  SingleLineTextDisplayType,
} from '@teable/core';

import { ITextCellValueVo } from '../airtable-sdks';
import { AirtableFieldVo } from './airtable.field.vo';

export class AirtableEmailField extends AirtableFieldVo {
  transformTeableCreateRecordRo(
    value: ITextCellValueVo,
  ): ISingleLineTextCellValue {
    return value;
  }

  transformTeableCreateFieldRo(): IFieldRo {
    return {
      type: FieldType.SingleLineText,
      name: this.name,
      dbFieldName: this.id,
      description: this.description,
      isLookup: false,
      options: {
        showAs: {
          type: SingleLineTextDisplayType.Email,
        },
      },
    };
  }
}
