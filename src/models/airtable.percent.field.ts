import { plainToInstance } from 'class-transformer';
import {
  AirtableCellTypeEnum,
  AirtableField,
  IAirtablePercentField,
  TeableCellValueType,
  TeableDbFieldType,
  TeableField,
  TeableFieldType,
} from 'types';

import { IFieldRo, NumberFormattingType } from '../teable-sdks';
import { TeableNumberField } from './teable.number.field';

export class AirtablePercentField extends AirtableField {
  constructor(field: IAirtablePercentField) {
    super(field);
  }

  get cellType(): AirtableCellTypeEnum {
    return AirtableCellTypeEnum.NUMBER;
  }

  getApiCellValue(value: number) {
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
          type: NumberFormattingType.Percent,
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
          type: NumberFormattingType.Percent,
          precision: precision,
        },
      },
    };
  }
}
