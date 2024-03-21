import { plainToInstance } from 'class-transformer';
import * as dayjs from 'dayjs';
import * as timezone from 'dayjs/plugin/timezone';
import * as utc from 'dayjs/plugin/utc';
import {
  AirtableCellTypeEnum,
  TeableCellValueType,
  TeableDbFieldType,
  TeableField,
  TeableFieldType,
} from 'types';

import { IFieldRo } from '../teable-sdks';
import { AirtableFieldVo } from './airtable.field.vo';
import {
  DateFormattingPreset,
  TeableDateField,
  TimeFormatting,
} from './teable.date.field';

dayjs.extend(timezone);
dayjs.extend(utc);

export class AirtableLastModifiedTimeField extends AirtableFieldVo {
  get cellType(): AirtableCellTypeEnum {
    return AirtableCellTypeEnum.STRING;
  }

  getTeableDBCellValue(value: unknown): string {
    const formatValue = dayjs
      .utc(value as string)
      .tz(
        this.options.timeZone && this.options.timeZone !== 'client'
          ? this.options.timeZone
          : 'Etc/GMT',
      );
    if (!formatValue.isValid()) return null;
    return `'${formatValue.toISOString()}'`;
  }

  getApiCellValue(value: string): string {
    const formatValue = dayjs
      .utc(value)
      .tz(
        this.options.timeZone && this.options.timeZone !== 'client'
          ? this.options.timeZone
          : 'Etc/GMT',
      );
    if (!formatValue.isValid()) return null;
    return formatValue.toISOString();
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
          time: this.options.timeFormat
            ? this.options.timeFormat.name === '12hour'
              ? TimeFormatting.Hour12
              : TimeFormatting.Hour24
            : TimeFormatting.None,
          timeZone:
            this.options.timeZone && this.options.timeZone !== 'client'
              ? this.options.timeZone
              : 'Etc/GMT',
        },
        defaultValue: 'now',
      },
      cellValueType: TeableCellValueType.DateTime,
      isComputed: false,
    };
    return plainToInstance(TeableDateField, json);
  }

  transformTeableFieldCreateRo(): IFieldRo {
    return {
      type: TeableFieldType.Date,
      name: this.name,
      description: this.description,
      isLookup: false,
      options: {
        formatting: {
          date: DateFormattingPreset.ISO,
          time:
            this.options?.timeFormat?.name === '12hour'
              ? TimeFormatting.Hour12
              : TimeFormatting.Hour24,
          timeZone: 'Etc/GMT',
        },
        defaultValue: 'now',
      },
    };
  }
}
