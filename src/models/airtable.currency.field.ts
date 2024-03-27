import { AirtableCellTypeEnum, TeableFieldType } from 'types';

import { ICurrencyFieldOptionsVo } from '../airtable-sdks';
import { ICreateFieldRo, NumberFormattingType } from '../teable-sdks';
import { AirtableFieldVo } from './airtable.field.vo';

export class AirtableCurrencyField extends AirtableFieldVo {
  options: ICurrencyFieldOptionsVo;

  get cellType(): AirtableCellTypeEnum {
    return AirtableCellTypeEnum.NUMBER;
  }

  getApiCellValue(value: number): number {
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
