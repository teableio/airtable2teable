import { plainToInstance } from 'class-transformer';
import * as dayjs from 'dayjs';
import * as timezone from 'dayjs/plugin/timezone';
import * as utc from 'dayjs/plugin/utc';
import {
  AirtableCellTypeEnum,
  AirtableField,
  IAirtableLastModifiedTimeField,
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

export class AirtableLastModifiedTimeField extends AirtableField {
  constructor(field: IAirtableLastModifiedTimeField) {
    super(field);
  }

  get cellType(): AirtableCellTypeEnum {
    return AirtableCellTypeEnum.STRING;
  }

  getTeableDBCellValue(value: unknown): string {
    const formatValue = dayjs
      .utc(value as string)
      .tz(
        this.field.options.timeZone && this.field.options.timeZone !== 'client'
          ? this.field.options.timeZone
          : 'Etc/GMT',
      );
    if (!formatValue.isValid()) return null;
    return `'${formatValue.toISOString()}'`;
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
          time: this.field.options.timeFormat
            ? this.field.options.timeFormat.name === '12hour'
              ? TimeFormatting.Hour12
              : TimeFormatting.Hour24
            : TimeFormatting.None,
          timeZone:
            this.field.options.timeZone &&
            this.field.options.timeZone !== 'client'
              ? this.field.options.timeZone
              : 'Etc/GMT',
        },
        defaultValue: 'now',
      },
      cellValueType: TeableCellValueType.DateTime,
      isComputed: false,
    };
    return plainToInstance(TeableDateField, json);
  }
}
