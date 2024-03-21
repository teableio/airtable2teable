import { plainToInstance } from 'class-transformer';
import {
  AirtableCellTypeEnum,
  TeableCellValueType,
  TeableDbFieldType,
  TeableField,
  TeableFieldType,
} from 'types';

import { IFieldRo, NumberFormattingType } from '../teable-sdks';
import { AirtableFieldVo } from './airtable.field.vo';
import { TeableNumberField } from './teable.number.field';

export class AirtableCurrencyField extends AirtableFieldVo {
  get cellType(): AirtableCellTypeEnum {
    return AirtableCellTypeEnum.NUMBER;
  }

  getApiCellValue(value: number): number {
    return value;
  }

  transformDataModel(): TeableField {
    const json = {
      id: this.id,
      name: this.name,
      description: this.description,
      type: TeableFieldType.Number,
      dbFieldType: TeableDbFieldType.Real,
      options: {
        formatting: {
          type: NumberFormattingType.Currency,
          precision: this.options?.precision,
          symbol: this.options?.symbol,
        },
      },
      cellValueType: TeableCellValueType.Number,
      isComputed: false,
    };
    return plainToInstance(TeableNumberField, json);
  }

  transformTeableFieldCreateRo(): IFieldRo {
    let precision = 0;
    if (this.options?.precision) {
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
          symbol: this.options?.symbol,
        },
      },
    };
  }
}
