import { plainToInstance } from 'class-transformer';
import {
  AirtableCellTypeEnum,
  AirtableField,
  IAirtableAutoNumberField,
  TeableCellValueType,
  TeableDbFieldType,
  TeableField,
  TeableFieldType,
} from 'types';

import { IFieldRo } from '../teable-sdks';
import { NumberFormattingType, TeableNumberField } from './teable.number.field';

export class AirtableAutoNumberField extends AirtableField {
  constructor(field: IAirtableAutoNumberField) {
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
          precision: 0,
        },
      },
      cellValueType: TeableCellValueType.Number,
      isComputed: false,
    };
    return plainToInstance(TeableNumberField, json);
  }

  transformTeableFieldCreateRo(): IFieldRo {
    return {
      type: TeableFieldType.Number,
      name: this.name,
      description: this.description,
      isLookup: false,
      options: {
        formatting: { type: NumberFormattingType.Decimal, precision: 0 },
      },
    };
  }
}
