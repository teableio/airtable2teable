import { plainToInstance } from 'class-transformer';
import {
  AirtableCellTypeEnum,
  AirtableField,
  Colors,
  IAirtableRatingField,
  TeableCellValueType,
  TeableDbFieldType,
  TeableField,
  TeableFieldType,
} from 'types';

import { IFieldRo, RatingIcon } from '../teable-sdks';
import { TeableRatingField } from './teable.rating.field';

export class AirtableRatingField extends AirtableField {
  constructor(field: IAirtableRatingField) {
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
      type: TeableFieldType.Rating,
      dbFieldType: TeableDbFieldType.Integer,
      options: {
        icon: RatingIcon.Star,
        color: Colors.YellowBright,
        max: this.field.options.max,
      },
      cellValueType: TeableCellValueType.Number,
      isComputed: false,
    };
    return plainToInstance(TeableRatingField, json);
  }

  transformTeableFieldCreateRo(): IFieldRo {
    return {
      type: TeableFieldType.Rating,
      name: this.name,
      description: this.description,
      isLookup: false,
      options: {
        icon: RatingIcon.Star,
        color: Colors.YellowBright,
        max: this.field.options?.max,
      },
    };
  }
}
