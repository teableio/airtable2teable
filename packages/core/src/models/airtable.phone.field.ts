import { TeableFieldType } from '@/types';

import { ITextCellValueVo } from '../airtable-sdks';
import {
  ICreateFieldRo,
  ISingleLineTextCellValue,
  SingleLineTextDisplayType,
} from '../teable-sdks';
import { AirtableFieldVo } from './airtable.field.vo';

export class AirtablePhoneField extends AirtableFieldVo {
  transformTeableCreateRecordRo(
    value: ITextCellValueVo,
  ): ISingleLineTextCellValue {
    return value;
  }

  transformTeableCreateFieldRo(): ICreateFieldRo {
    return {
      type: TeableFieldType.SingleLineText,
      name: this.name,
      dbFieldName: this.id,
      description: this.description,
      isLookup: false,
      options: {
        showAs: {
          type: SingleLineTextDisplayType.Phone,
        },
      },
    };
  }
}
