import * as dayjs from 'dayjs';
import * as timezone from 'dayjs/plugin/timezone';
import { z } from 'zod';

import { TeableCellValueType, TeableField, TeableFieldType } from '../types';

dayjs.extend(timezone);

export enum DateFormattingPreset {
  US = 'M/D/YYYY',
  European = 'D/M/YYYY',
  Asian = 'YYYY/MM/DD',
  ISO = 'YYYY-MM-DD',
  YM = 'YYYY-MM',
  MD = 'MM-DD',
  Y = 'YYYY',
  M = 'MM',
  D = 'DD',
}

export enum TimeFormatting {
  Hour24 = 'HH:mm',
  Hour12 = 'hh:mm A',
  None = 'None',
}

// Define a Zod schema for time zone string
export const timeZoneStringSchema = z.string().refine(
  (value) => {
    try {
      new Intl.DateTimeFormat('en-US', { timeZone: value }).resolvedOptions();
      return true;
    } catch (e) {
      return false;
    }
  },
  {
    message: 'Invalid time zone string',
  },
);

export const datetimeFormattingSchema = z.object({
  date: z.string(),
  time: z.nativeEnum(TimeFormatting),
  timeZone: timeZoneStringSchema,
});

export type IDatetimeFormatting = z.infer<typeof datetimeFormattingSchema>;

export const defaultDatetimeFormatting: IDatetimeFormatting = {
  date: DateFormattingPreset.ISO,
  time: TimeFormatting.None,
  timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
};

export const formatDateToString = (
  cellValue: string | undefined,
  formatting: IDatetimeFormatting,
) => {
  if (cellValue == null) {
    return '';
  }

  const { date, time, timeZone } = formatting;
  const format = time === TimeFormatting.None ? date : `${date} ${time}`;
  return dayjs(cellValue as string)
    .tz(timeZone)
    .format(format);
};

export const dateFieldOptionsSchema = z
  .object({
    formatting: datetimeFormattingSchema,
    defaultValue: z.enum(['now'] as const).optional(),
  })
  .strict();

export type IDateFieldOptions = z.infer<typeof dateFieldOptionsSchema>;

export const dataFieldCellValueSchema = z
  .string()
  .datetime({ precision: 3, offset: true });

export type IDateCellValue = z.infer<typeof dataFieldCellValueSchema>;

export class TeableDateField extends TeableField {
  type!: TeableFieldType.Date;

  options!: IDateFieldOptions;

  cellValueType!: TeableCellValueType.DateTime;

  static defaultOptions(): IDateFieldOptions {
    return {
      formatting: defaultDatetimeFormatting,
    };
  }

  cellValue2String(cellValue?: unknown) {
    if (cellValue == null) return '';
    if (this.isMultipleCellValue && Array.isArray(cellValue)) {
      return cellValue.map((v) => this.item2String(v)).join(', ');
    }

    return this.item2String(cellValue as string);
  }

  convertStringToCellValue(value: string): string | null {
    if (this.isLookup) {
      return null;
    }

    if (value === '' || value == null) return null;

    try {
      const formatValue = dayjs.tz(value, this.options.formatting.timeZone);
      if (!formatValue.isValid()) return null;
      return formatValue.toISOString();
    } catch (e) {
      return null;
    }
  }

  item2String(item?: unknown) {
    return formatDateToString(item as string, this.options.formatting);
  }

  repair(value: unknown) {
    if (this.isLookup) {
      return null;
    }

    if (typeof value === 'string' || typeof value === 'number') {
      return this.convertStringToCellValue(value as string);
    }

    return null;
  }

  validateOptions() {
    return dateFieldOptionsSchema.safeParse(this.options);
  }

  validateCellValue(cellValue: unknown) {
    if (this.isMultipleCellValue) {
      return z
        .array(dataFieldCellValueSchema)
        .nonempty()
        .nullable()
        .safeParse(cellValue);
    }
    return dataFieldCellValueSchema.nullable().safeParse(cellValue);
  }
}
