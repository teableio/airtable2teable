import { AirtableCellTypeEnum, TeableFieldType } from 'types';

import { IDurationFieldOptionsVo } from '../airtable-sdks';
import { ICreateFieldRo } from '../teable-sdks';
import { AirtableFieldVo } from './airtable.field.vo';
import { NumberFormattingType } from './teable.number.field';

export class AirtableDurationField extends AirtableFieldVo {
  options: IDurationFieldOptionsVo;

  get cellType(): AirtableCellTypeEnum {
    return AirtableCellTypeEnum.NUMBER;
  }

  getApiCellValue(value: number): number {
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
          precision: 0,
        },
      },
    };
  }
}
