import { z } from 'zod';

import {
  Colors,
  TeableCellValueType,
  TeableField,
  TeableFieldType,
} from '../types';

// number format
export enum NumberFormattingType {
  Decimal = 'decimal',
  Percent = 'percent',
  Currency = 'currency',
}

const baseFormatting = z.object({
  precision: z.number().max(5).min(0),
});

const decimalFormattingSchema = baseFormatting.extend({
  type: z.literal(NumberFormattingType.Decimal),
});

const percentFormattingSchema = baseFormatting.extend({
  type: z.literal(NumberFormattingType.Percent),
});

const currencyFormattingSchema = baseFormatting.extend({
  type: z.literal(NumberFormattingType.Currency),
  symbol: z.string(),
});

const numberFormattingSchema = z.union([
  decimalFormattingSchema,
  percentFormattingSchema,
  currencyFormattingSchema,
]);

export type IDecimalFormatting = z.infer<typeof decimalFormattingSchema>;

export type IPercentFormatting = z.infer<typeof percentFormattingSchema>;

export type ICurrencyFormatting = z.infer<typeof currencyFormattingSchema>;

export type INumberFormatting = z.infer<typeof numberFormattingSchema>;
// end

// display
export enum SingleNumberDisplayType {
  Bar = 'bar',
  Ring = 'ring',
}

export enum MultiNumberDisplayType {
  Bar = 'bar',
  Line = 'line',
}

export const singleNumberShowAsSchema = z.object({
  type: z.nativeEnum(SingleNumberDisplayType),
  color: z.nativeEnum(Colors),
  showValue: z.boolean(),
  maxValue: z.number(),
});

export const multiNumberShowAsSchema = z.object({
  type: z.nativeEnum(MultiNumberDisplayType),
  color: z.nativeEnum(Colors),
});

export type ISingleNumberShowAs = z.infer<typeof singleNumberShowAsSchema>;

export type IMultiNumberShowAs = z.infer<typeof multiNumberShowAsSchema>;

export const numberShowAsSchema = z.union([
  singleNumberShowAsSchema,
  multiNumberShowAsSchema,
]);

export type INumberShowAs = z.infer<typeof numberShowAsSchema>;

// end

// option
export const numberFieldOptionsSchema = z
  .object({
    formatting: numberFormattingSchema,
    showAs: numberShowAsSchema.optional(),
  })
  .strict();

export const numberFieldOptionsRoSchema = numberFieldOptionsSchema.partial({
  formatting: true,
  showAs: true,
});

export type INumberFieldOptions = z.infer<typeof numberFieldOptionsSchema>;
// end

// cell value
export const numberCellValueSchema = z.number();

export type INumberCellValue = z.infer<typeof numberCellValueSchema>;

export const getShowAsSchema = (
  cellValueType: TeableCellValueType,
  isMultipleCellValue: boolean | undefined,
) => {
  if (cellValueType === TeableCellValueType.Number) {
    return isMultipleCellValue
      ? multiNumberShowAsSchema.optional()
      : singleNumberShowAsSchema.optional();
  }

  return z.undefined();
};

export const parseStringToNumber = (value: string | null) => {
  if (value == null) return null;

  const originStr = String(value);
  const isPercent = originStr.includes('%');
  const numberReg = /[^\d.+-]/g;
  const symbolReg = /([+\-.])+/g;
  const numStr = originStr.replace(numberReg, '').replace(symbolReg, '$1');
  const num = parseFloat(numStr);

  if (Number.isNaN(num)) {
    return null;
  }
  return isPercent ? num / 100 : num;
};

export const DEFAULT_CURRENCY_SYMBOL = '$';

export const formatNumberToString = (
  cellValue: number | undefined,
  formatting: INumberFormatting,
) => {
  if (cellValue == null) {
    return '';
  }

  const { type, precision } = formatting;

  if (type === NumberFormattingType.Currency) {
    const symbol = formatting.symbol ?? DEFAULT_CURRENCY_SYMBOL;
    const sign = cellValue < 0 ? '-' : '';
    const options =
      precision != null
        ? {
            minimumFractionDigits: precision,
            maximumFractionDigits: precision,
          }
        : undefined;

    const formattedValue = Math.abs(cellValue).toLocaleString('en-US', options);
    return sign + symbol + formattedValue;
  }

  if (type === NumberFormattingType.Percent) {
    const formattedNumber = (cellValue * 100).toFixed(precision);
    return `${formattedNumber}%`;
  }

  if (precision != null) {
    return cellValue.toFixed(precision);
  }

  return String(cellValue);
};
// end

export class TeableNumberField extends TeableField {
  type!: TeableFieldType.Number;

  options!: INumberFieldOptions;

  cellValueType!: TeableCellValueType.Number;

  static defaultOptions(): INumberFieldOptions {
    return {
      formatting: {
        type: NumberFormattingType.Decimal,
        precision: 2,
      },
    };
  }

  cellValue2String(cellValue?: unknown) {
    if (cellValue == null) {
      return '';
    }

    if (this.isMultipleCellValue && Array.isArray(cellValue)) {
      return cellValue.map((v) => this.item2String(v)).join(', ');
    }

    return this.item2String(cellValue as number);
  }

  item2String(value?: unknown): string {
    return formatNumberToString(value as number, this.options.formatting);
  }

  convertStringToCellValue(value: string): number | null {
    if (this.isLookup) {
      return null;
    }

    return parseStringToNumber(value);
  }

  repair(value: unknown) {
    if (this.isLookup) {
      return null;
    }

    if (typeof value === 'number') {
      return value;
    }
    if (typeof value === 'string') {
      return this.convertStringToCellValue(value);
    }
    return null;
  }

  validateOptions() {
    return z
      .object({
        formatting: numberFormattingSchema,
        showAs: getShowAsSchema(this.cellValueType, this.isMultipleCellValue),
      })
      .safeParse(this.options);
  }

  validateCellValue(value: unknown) {
    if (this.isMultipleCellValue) {
      return z
        .array(numberCellValueSchema)
        .nonempty()
        .nullable()
        .safeParse(value);
    }
    return numberCellValueSchema.nullable().safeParse(value);
  }
}
