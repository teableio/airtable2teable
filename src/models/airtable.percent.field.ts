import { AirtableCellTypeEnum, TeableFieldType } from 'types';

import { INumberFieldOptionsVo } from '../airtable-sdks';
import { ICreateFieldRo, NumberFormattingType } from '../teable-sdks';
import { AirtableFieldVo } from './airtable.field.vo';

export class AirtablePercentField extends AirtableFieldVo {
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
          type: NumberFormattingType.Percent,
          precision: this.options.precision > 5 ? 5 : this.options.precision,
        },
      },
    };
  }
}
