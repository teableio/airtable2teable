import * as dayjs from 'dayjs';
import * as timezone from 'dayjs/plugin/timezone';
import * as utc from 'dayjs/plugin/utc';
import { AirtableCellTypeEnum, TeableFieldType } from 'types';

import { IDatetimeFieldOptionsVo } from '../airtable-sdks';
import { defaultDatetimeFormatting, ICreateFieldRo } from '../teable-sdks';
import { AirtableFieldVo } from './airtable.field.vo';

dayjs.extend(timezone);
dayjs.extend(utc);

export class AirtableDateTimeField extends AirtableFieldVo {
  options: IDatetimeFieldOptionsVo;

  get cellType(): AirtableCellTypeEnum {
    return AirtableCellTypeEnum.STRING;
  }

  getApiCellValue(value: string): string {
    return value;
  }

  transformTeableCreateFieldRo(): ICreateFieldRo {
    return {
      type: TeableFieldType.Date,
      name: this.name,
      description: this.description,
      isLookup: false,
      options: {
        formatting: defaultDatetimeFormatting,
        defaultValue: 'now',
      },
    };
  }
}
