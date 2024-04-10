import { TeableFieldType } from 'types';

import { IButtonCellValueVo } from '../airtable-sdks';
import {
  ICreateFieldRo,
  ISingleLineTextCellValue,
  SingleLineTextDisplayType,
} from '../teable-sdks';
import { AirtableFieldVo } from './airtable.field.vo';

export class AirtableButtonField extends AirtableFieldVo {
  options: undefined;

  transformTeableCreateRecordRo(
    value: IButtonCellValueVo,
  ): ISingleLineTextCellValue {
    return value.url;
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
          type: SingleLineTextDisplayType.Url,
        },
      },
    };
  }
}
