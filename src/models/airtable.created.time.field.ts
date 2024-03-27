import * as dayjs from 'dayjs';
import * as timezone from 'dayjs/plugin/timezone';
import * as utc from 'dayjs/plugin/utc';
import { AirtableCellTypeEnum, TeableFieldType } from 'types';
import { z } from 'zod';

import { ICreatedTimeFieldOptionsVo } from '../airtable-sdks';
import { defaultDatetimeFormatting, ICreateFieldRo } from '../teable-sdks';
import { AirtableFieldVo } from './airtable.field.vo';

dayjs.extend(timezone);
dayjs.extend(utc);

export const createdTimeCellValueSchema = z.string();

export type ICreatedTimeCellValueVo = z.infer<
  typeof createdTimeCellValueSchema
>;

export class AirtableCreatedTimeField extends AirtableFieldVo {
  options: ICreatedTimeFieldOptionsVo;

  get cellType(): AirtableCellTypeEnum {
    return AirtableCellTypeEnum.STRING;
  }

  getApiCellValue(value: ICreatedTimeCellValueVo) {
    return value;
  }

  transformTeableCreateFieldRo(): ICreateFieldRo {
    return {
      type: TeableFieldType.CreatedTime,
      name: this.name,
      description: this.description,
      isLookup: false,
      options: {
        formatting: defaultDatetimeFormatting,
      },
    };
  }
}
