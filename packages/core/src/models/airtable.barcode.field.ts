import { FieldType, IFieldRo, ISingleLineTextCellValue } from '@teable/core';

import { IBarcodeCellValueVo } from '../airtable-sdks';
import { AirtableFieldVo } from './airtable.field.vo';

export class AirtableBarcodeField extends AirtableFieldVo {
  transformTeableCreateRecordRo(
    value: IBarcodeCellValueVo,
  ): ISingleLineTextCellValue {
    return value.text ?? '';
  }

  transformTeableCreateFieldRo(): IFieldRo {
    return {
      type: FieldType.SingleLineText,
      name: this.name,
      dbFieldName: this.id,
      description: this.description,
      isLookup: false,
      options: {},
    };
  }
}
