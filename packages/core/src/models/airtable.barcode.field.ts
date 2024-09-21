import { TeableFieldType } from '@/types';

import { IBarcodeCellValueVo } from '../airtable-sdks';
import { ICreateFieldRo, ISingleLineTextCellValue } from '../teable-sdks';
import { AirtableFieldVo } from './airtable.field.vo';

export class AirtableBarcodeField extends AirtableFieldVo {

  transformTeableCreateRecordRo(
    value: IBarcodeCellValueVo,
  ): ISingleLineTextCellValue {
    return value.text;
  }
  transformTeableCreateFieldRo(): ICreateFieldRo {
    return {
      type: TeableFieldType.SingleLineText,
      name: this.name,
      dbFieldName: this.id,
      description: this.description,
      isLookup: false,
      options: {},
    };
  }
}
