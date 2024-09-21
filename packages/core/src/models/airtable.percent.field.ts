import { TeableFieldType } from '@/types';

import { INumberCellValueVo, INumberFieldOptionsVo } from '../airtable-sdks';
import {
  ICreateFieldRo,
  INumberCellValue,
  NumberFormattingType,
} from '../teable-sdks';
import { AirtableFieldVo } from './airtable.field.vo';

export class AirtablePercentField extends AirtableFieldVo {

  transformTeableCreateRecordRo(value: INumberCellValueVo): INumberCellValue {
    return value;
  }

  transformTeableCreateFieldRo(): ICreateFieldRo {
    return {
      type: TeableFieldType.Number,
      name: this.name,
      dbFieldName: this.id,
      description: this.description,
      isLookup: false,
      options: {
        formatting: {
          type: NumberFormattingType.Percent,
          precision: this.options.precision > 5 ? 5 : this.options.precision,
        },
      },
    };
  }
}
