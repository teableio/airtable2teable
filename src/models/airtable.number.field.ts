import { plainToInstance } from 'class-transformer';
import {
  AirtableCellTypeEnum,
  AirtableField,
  IAirtableNumberField,
  TeableCellValueType,
  TeableDbFieldType,
  TeableField,
  TeableFieldType,
} from 'types';

import { IFieldRo } from '../teable-sdks';
import { NumberFormattingType, TeableNumberField } from './teable.number.field';

export class AirtableNumberField extends AirtableField {
  constructor(field: IAirtableNumberField) {
    super(field);
  }

  get cellType(): AirtableCellTypeEnum {
    return AirtableCellTypeEnum.NUMBER;
  }

  getTeableDBCellValue(value: unknown): number {
    return value as number;
  }

  getApiCellValue(value: unknown): number {
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
          type: NumberFormattingType.Decimal,
          precision: this.field.options?.precision,
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
      type: TeableFieldType.Number,
      name: this.name,
      description: this.description,
      isLookup: false,
      options: {
        formatting: {
          type: NumberFormattingType.Decimal,
          precision: precision,
        },
      },
    };
  }
}
