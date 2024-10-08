import { TeableFieldType } from '@/types';

import { ICheckboxCellValueVo } from '../airtable-sdks';
import { ICheckboxCellValue, ICreateFieldRo } from '../teable-sdks';
import { AirtableFieldVo } from './airtable.field.vo';

export class AirtableCheckboxField extends AirtableFieldVo {
  transformTeableCreateRecordRo(
    value: ICheckboxCellValueVo,
  ): ICheckboxCellValue {
    return !!value;
  }

  transformTeableCreateFieldRo(): ICreateFieldRo {
    return {
      type: TeableFieldType.Checkbox,
      name: this.name,
      dbFieldName: this.id,
      description: this.description,
      isLookup: false,
      options: {},
    };
  }
}
