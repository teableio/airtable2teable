import { TeableFieldType } from 'types';

import { IAiTextCellValueVo, IAiTextFieldOptionsVo } from '../airtable-sdks';
import { ICreateFieldRo, ISingleLineTextCellValue } from '../teable-sdks';
import { AirtableFieldVo } from './airtable.field.vo';

export class AirtableAiTextField extends AirtableFieldVo {
  options?: IAiTextFieldOptionsVo;

  transformTeableCreateRecordRo(
    value: IAiTextCellValueVo,
  ): ISingleLineTextCellValue {
    return value.value;
  }

  transformTeableCreateFieldRo(): ICreateFieldRo {
    return {
      type: TeableFieldType.LongText,
      name: this.name,
      isLookup: false,
      description: this.description,
      options: {},
    };
  }
}
