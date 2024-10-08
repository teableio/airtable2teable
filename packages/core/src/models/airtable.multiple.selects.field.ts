import { TeableFieldType } from '@/types';

import { ITextCellValueVo } from '../airtable-sdks';
import { ICreateFieldRo, IMultipleSelectCellValue } from '../teable-sdks';
import { AirtableFieldVo } from './airtable.field.vo';

export class AirtableMultipleSelectsField extends AirtableFieldVo {
  transformTeableCreateRecordRo(
    value: ITextCellValueVo[],
  ): IMultipleSelectCellValue {
    return value;
  }

  transformTeableCreateFieldRo(): ICreateFieldRo {
    return {
      type: TeableFieldType.MultipleSelect,
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
