import * as dayjs from 'dayjs';
import * as timezone from 'dayjs/plugin/timezone';
import * as utc from 'dayjs/plugin/utc';
import { AirtableCellTypeEnum, TeableFieldType } from 'types';

import { ILastModifiedTimeFieldOptionsVo } from '../airtable-sdks';
import { defaultDatetimeFormatting, ICreateFieldRo } from '../teable-sdks';
import { AirtableFieldVo } from './airtable.field.vo';

dayjs.extend(timezone);
dayjs.extend(utc);

export class AirtableLastModifiedTimeField extends AirtableFieldVo {
  options: ILastModifiedTimeFieldOptionsVo;

  get cellType(): AirtableCellTypeEnum {
    return AirtableCellTypeEnum.STRING;
  }

  getApiCellValue(value: string): string {
    return value;
  }

  transformTeableCreateFieldRo(): ICreateFieldRo {
    return {
      type: TeableFieldType.LastModifiedTime,
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
