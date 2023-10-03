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

import { NumberFormattingType, TeableNumberField } from './teable.number.field';

export class AirtableNumberField extends AirtableField {
  constructor(field: IAirtableNumberField) {
    super(field);
  }

  get cellType(): AirtableCellTypeEnum {
    return AirtableCellTypeEnum.NUMBER;
  }

  getCellValue(value: any): number {
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
          type: NumberFormattingType.Decimal,
          precision: this.field.options?.precision,
        },
      },
      cellValueType: TeableCellValueType.Number,
      isComputed: false,
    };
    return plainToInstance(TeableNumberField, json);
  }
}
