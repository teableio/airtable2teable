import { AirtableCellTypeEnum, TeableFieldType } from 'types';

import { INumberFieldOptionsVo } from '../airtable-sdks';
import { ICreateFieldRo } from '../teable-sdks';
import { AirtableFieldVo } from './airtable.field.vo';
import { NumberFormattingType } from './teable.number.field';

export class AirtableNumberField extends AirtableFieldVo {
  options: INumberFieldOptionsVo;

  get cellType(): AirtableCellTypeEnum {
    return AirtableCellTypeEnum.NUMBER;
  }

  getApiCellValue(value: number) {
    return value;
  }

  transformTeableCreateFieldRo(): ICreateFieldRo {
    return {
      type: TeableFieldType.Number,
      name: this.name,
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
