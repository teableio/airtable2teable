import { FieldType, IFieldRo, ISingleLineTextCellValue } from '@teable/core';

import { IAiTextCellValueVo } from '../airtable-sdks';
import { AirtableFieldVo } from './airtable.field.vo';

export class AirtableAiTextField extends AirtableFieldVo {
  transformTeableCreateRecordRo(
    value: IAiTextCellValueVo,
  ): ISingleLineTextCellValue {
    return value.value ?? '';
  }

  transformTeableCreateFieldRo(): IFieldRo {
    return {
      type: FieldType.LongText,
      name: this.name,
      dbFieldName: this.id,
      isLookup: false,
      description: this.description,
      options: {},
    };
  }
}
