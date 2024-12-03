import {
  FieldType,
  IFieldRo,
  INumberCellValue,
  NumberFormattingType,
} from '@teable/core';

import { INumberCellValueVo } from '../airtable-sdks';
import { AirtableFieldVo } from './airtable.field.vo';

export class AirtableCurrencyField extends AirtableFieldVo {
  transformTeableCreateRecordRo(value: INumberCellValueVo): INumberCellValue {
    return value;
  }

  transformTeableCreateFieldRo(): IFieldRo {
    let precision = 0;
    if (this.options.precision) {
      precision = this.options.precision > 5 ? 5 : this.options.precision;
    }
    return {
      type: FieldType.Number,
      name: this.name,
      dbFieldName: this.id,
      description: this.description,
      isLookup: false,
      options: {
        formatting: {
          type: NumberFormattingType.Currency,
          precision: precision,
          symbol: this.options.symbol,
        },
      },
    };
  }
}
