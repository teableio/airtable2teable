import { TeableFieldType } from '@/types';

import { IAiTextCellValueVo } from '../airtable-sdks';
import { ICreateFieldRo, ISingleLineTextCellValue } from '../teable-sdks';
import { AirtableFieldVo } from './airtable.field.vo';

export class AirtableAiTextField extends AirtableFieldVo {
  transformTeableCreateRecordRo(
    value: IAiTextCellValueVo,
  ): ISingleLineTextCellValue {
    return value.value;
  }

  transformTeableCreateFieldRo(): ICreateFieldRo {
    return {
      type: TeableFieldType.LongText,
      name: this.name,
      dbFieldName: this.id,
      isLookup: false,
      description: this.description,
      options: {},
    };
  }
}
