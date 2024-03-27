import { AirtableCellTypeEnum, TeableFieldType } from 'types';

import { IRatingFieldOptionsVo } from '../airtable-sdks';
import { ICreateFieldRo, RatingIcon } from '../teable-sdks';
import { AirtableFieldVo } from './airtable.field.vo';

export class AirtableRatingField extends AirtableFieldVo {
  options: IRatingFieldOptionsVo;

  get cellType(): AirtableCellTypeEnum {
    return AirtableCellTypeEnum.NUMBER;
  }

  getApiCellValue(value: number) {
    return value;
  }

  transformTeableCreateFieldRo(): ICreateFieldRo {
    return {
      type: TeableFieldType.Rating,
      name: this.name,
      description: this.description,
      isLookup: false,
      options: {
        icon: RatingIcon.Star,
        color: this.options.color,
        max: this.options.max,
      },
    };
  }
}
