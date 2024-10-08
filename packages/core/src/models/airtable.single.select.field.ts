import { TeableFieldType } from '@/types';

import { ITextCellValueVo } from '../airtable-sdks';
import { ICreateFieldRo, ISingleLineTextCellValue } from '../teable-sdks';
import { AirtableFieldVo } from './airtable.field.vo';

export class AirtableSingleSelectField extends AirtableFieldVo {
  transformTeableCreateRecordRo(
    value: ITextCellValueVo,
  ): ISingleLineTextCellValue {
    return value;
  }

  transformTeableCreateFieldRo(): ICreateFieldRo {
    return {
      type: TeableFieldType.SingleSelect,
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
