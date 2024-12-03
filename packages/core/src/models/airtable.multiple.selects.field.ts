import { FieldType, IFieldRo, IMultipleSelectCellValue } from '@teable/core';

import { ITextCellValueVo } from '../airtable-sdks';
import { AirtableFieldVo } from './airtable.field.vo';

export class AirtableMultipleSelectsField extends AirtableFieldVo {
  transformTeableCreateRecordRo(
    value: ITextCellValueVo[],
  ): IMultipleSelectCellValue {
    return value;
  }

  transformTeableCreateFieldRo(): IFieldRo {
    return {
      type: FieldType.MultipleSelect,
      name: this.name,
      dbFieldName: this.id,
      description: this.description,
      isLookup: false,
      options: {
        choices: this.options?.choices || [],
      },
    };
  }
}
