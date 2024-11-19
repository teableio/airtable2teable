import { FieldType, ICheckboxCellValue, IFieldRo } from '@teable/core';

import { ICheckboxCellValueVo } from '../airtable-sdks';
import { AirtableFieldVo } from './airtable.field.vo';

export class AirtableCheckboxField extends AirtableFieldVo {
  transformTeableCreateRecordRo(
    value: ICheckboxCellValueVo,
  ): ICheckboxCellValue {
    return !!value;
  }

  transformTeableCreateFieldRo(): IFieldRo {
    return {
      type: FieldType.Checkbox,
      name: this.name,
      dbFieldName: this.id,
      description: this.description,
      isLookup: false,
      options: {},
    };
  }
}
