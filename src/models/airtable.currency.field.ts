import { TeableFieldType } from 'types';

import { ICurrencyFieldOptionsVo, INumberCellValueVo } from '../airtable-sdks';
import {
  ICreateFieldRo,
  INumberCellValue,
  NumberFormattingType,
} from '../teable-sdks';
import { AirtableFieldVo } from './airtable.field.vo';

export class AirtableCurrencyField extends AirtableFieldVo {
  options: ICurrencyFieldOptionsVo;

  transformTeableCreateRecordRo(value: INumberCellValueVo): INumberCellValue {
    return value;
  }

  transformTeableCreateFieldRo(): ICreateFieldRo {
    let precision = 0;
    if (this.options.precision) {
      precision = this.options.precision > 5 ? 5 : this.options.precision;
    }
    return {
      type: TeableFieldType.Number,
      name: this.name,
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
