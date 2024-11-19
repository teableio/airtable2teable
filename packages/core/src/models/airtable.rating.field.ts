import {
  FieldType,
  IFieldRo,
  INumberCellValue,
  RatingIcon,
} from '@teable/core';

import { INumberCellValueVo } from '../airtable-sdks';
import { AirtableFieldVo } from './airtable.field.vo';

export class AirtableRatingField extends AirtableFieldVo {
  transformTeableCreateRecordRo(value: INumberCellValueVo): INumberCellValue {
    return value;
  }

  transformTeableCreateFieldRo(): IFieldRo {
    return {
      type: FieldType.Rating,
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
