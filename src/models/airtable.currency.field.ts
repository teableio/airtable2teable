import { plainToInstance } from 'class-transformer';
import {
  AirtableCellTypeEnum,
  AirtableField,
  IAirtableCurrencyField,
  TeableCellValueType,
  TeableDbFieldType,
  TeableField,
  TeableFieldType,
} from 'types';

import { IFieldRo, NumberFormattingType } from '../teable-sdks';
import { TeableNumberField } from './teable.number.field';

export class AirtableCurrencyField extends AirtableField {
  constructor(field: IAirtableCurrencyField) {
    super(field);
  }

  get cellType(): AirtableCellTypeEnum {
    return AirtableCellTypeEnum.NUMBER;
  }

  getTeableDBCellValue(value: unknown): number {
    return value as number;
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
          precision: this.field.options?.precision,
          symbol: this.field.options?.symbol,
        },
      },
      cellValueType: TeableCellValueType.Number,
      isComputed: false,
    };
    return plainToInstance(TeableNumberField, json);
  }

  transformTeableFieldCreateRo(): IFieldRo {
    let precision = 0;
    if (this.field.options?.precision) {
      precision =
        this.field.options.precision > 5 ? 5 : this.field.options.precision;
    }
    return {
      id: this.id,
      type: TeableFieldType.Number,
      name: this.name,
      description: this.description,
      isLookup: false,
      options: {
        formatting: {
          type: NumberFormattingType.Currency,
          precision: precision,
          symbol: this.field.options?.symbol,
        },
      },
    };
  }
}
