import { TeableFieldType } from 'types';

import { ITextCellValueVo } from '../airtable-sdks';
import { ICreateFieldRo, ISingleLineTextCellValue } from '../teable-sdks';
import { AirtableFieldVo } from './airtable.field.vo';

export class AirtableRichTextField extends AirtableFieldVo {
  options: undefined;

  transformTeableCreateRecordRo(
    value: ITextCellValueVo,
  ): ISingleLineTextCellValue {
    return value;
  }

  transformTeableCreateFieldRo(): ICreateFieldRo {
    return {
      type: TeableFieldType.LongText,
      name: this.name,
      description: this.description,
      isLookup: false,
      options: {},
    };
  }
}
