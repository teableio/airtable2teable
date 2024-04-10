import { TeableFieldType } from 'types';

import { IDurationFieldOptionsVo, INumberCellValueVo } from '../airtable-sdks';
import {
  ICreateFieldRo,
  INumberCellValue,
  NumberFormattingType,
} from '../teable-sdks';
import { AirtableFieldVo } from './airtable.field.vo';

export class AirtableDurationField extends AirtableFieldVo {
  options: IDurationFieldOptionsVo;

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
          type: NumberFormattingType.Decimal,
          precision: 0,
        },
      },
    };
  }
}
