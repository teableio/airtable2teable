import {
  FieldType,
  IFieldRo,
  ISingleLineTextCellValue,
  SingleLineTextDisplayType,
} from '@teable/core';

import { IButtonCellValueVo } from '../airtable-sdks';
import { AirtableFieldVo } from './airtable.field.vo';

export class AirtableButtonField extends AirtableFieldVo {
  transformTeableCreateRecordRo(
    value: IButtonCellValueVo,
  ): ISingleLineTextCellValue {
    return value.url ?? '';
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
          type: SingleLineTextDisplayType.Url,
        },
      },
    };
  }
}
