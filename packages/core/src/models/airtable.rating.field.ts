import { TeableFieldType } from '@/types';

import { INumberCellValueVo } from '../airtable-sdks';
import { ICreateFieldRo, INumberCellValue, RatingIcon } from '../teable-sdks';
import { AirtableFieldVo } from './airtable.field.vo';

export class AirtableRatingField extends AirtableFieldVo {
  transformTeableCreateRecordRo(value: INumberCellValueVo): INumberCellValue {
    return value;
  }

  transformTeableCreateFieldRo(): ICreateFieldRo {
    return {
      type: TeableFieldType.Rating,
      name: this.name,
      dbFieldName: this.id,
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
