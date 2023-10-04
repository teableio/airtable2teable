import { plainToInstance } from 'class-transformer';
import * as dayjs from 'dayjs';
import * as timezone from 'dayjs/plugin/timezone';
import * as utc from 'dayjs/plugin/utc';
import {
  AirtableCellTypeEnum,
  AirtableField,
  IAirtableDateField,
  TeableCellValueType,
  TeableDbFieldType,
  TeableField,
  TeableFieldType,
} from 'types';

import {
  DateFormattingPreset,
  TeableDateField,
  TimeFormatting,
} from './teable.date.field';

dayjs.extend(timezone);
dayjs.extend(utc);

export class AirtableDateField extends AirtableField {
  constructor(field: IAirtableDateField) {
    super(field);
  }

  get cellType(): AirtableCellTypeEnum {
    return AirtableCellTypeEnum.STRING;
  }

  getTeableDBCellValue(value: unknown): Date {
    const formatValue = dayjs.utc(value as string).tz('Etc/GMT');
    if (!formatValue.isValid()) return null;
    return formatValue.toDate();
  }

  transformDataModel(): TeableField {
    const json = {
      id: this.id,
      name: this.name,
      description: this.description,
      type: TeableFieldType.Date,
      dbFieldType: TeableDbFieldType.DateTime,
      options: {
        formatting: {
          date: DateFormattingPreset.ISO,
          time: TimeFormatting.None,
          timeZone: 'Etc/GMT',
        },
        defaultValue: 'now',
      },
      cellValueType: TeableCellValueType.DateTime,
      isComputed: false,
    };
    return plainToInstance(TeableDateField, json);
  }
}
