import { FieldType, IFieldRo, ISingleLineTextCellValue } from '@teable/core';

import { ITextCellValueVo } from '../airtable-sdks';
import { AirtableFieldVo } from './airtable.field.vo';

export class AirtableSyncSourceField extends AirtableFieldVo {
  transformTeableCreateRecordRo(
    value: ITextCellValueVo,
  ): ISingleLineTextCellValue {
    return value;
  }

  transformTeableCreateFieldRo(): IFieldRo {
    return {
      type: FieldType.SingleSelect,
      name: this.name,
      dbFieldName: this.id,
      description: this.description,
      isLookup: false,
      options: {
        choices: this.options.choices,
      },
    };
  }
}
