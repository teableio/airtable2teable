import {
  FieldType,
  IFieldRo,
  INumberCellValue,
  NumberFormattingType,
} from '@teable/core';

import { INumberCellValueVo } from '@/airtable-sdks';

import { AirtableFieldVo } from './airtable.field.vo';

export class AirtableNumberField extends AirtableFieldVo {
  transformTeableCreateRecordRo(value: INumberCellValueVo): INumberCellValue {
    return value;
  }

  transformTeableCreateFieldRo(): IFieldRo {
    return {
      type: FieldType.Number,
      name: this.name,
      dbFieldName: this.id,
      description: this.description,
      isLookup: false,
      options: {
        formatting: {
          type: NumberFormattingType.Decimal,
          precision: this.options.precision > 5 ? 5 : this.options.precision,
        },
      },
    };
  }
}
