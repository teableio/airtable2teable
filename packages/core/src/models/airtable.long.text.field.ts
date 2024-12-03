import { FieldType, IFieldRo, ISingleLineTextCellValue } from '@teable/core';

import { ITextCellValueVo } from '../airtable-sdks';
import { AirtableFieldVo } from './airtable.field.vo';

export class AirtableLongTextField extends AirtableFieldVo {
  transformTeableCreateRecordRo(
    value: ITextCellValueVo,
  ): ISingleLineTextCellValue {
    return value;
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
