import { z } from 'zod';

import { TeableCellValueType } from '@/types';

import {
  datetimeFormattingSchema,
  defaultDatetimeFormatting,
} from './datetime';
import { defaultNumberFormatting, numberFormattingSchema } from './number';

export * from './datetime';
export * from './number';
export const unionFormattingSchema = z.union([
  datetimeFormattingSchema,
  numberFormattingSchema,
]);

export const getDefaultFormatting = (cellValueType: TeableCellValueType) => {
  switch (cellValueType) {
    case TeableCellValueType.Number:
      return defaultNumberFormatting;
    case TeableCellValueType.DateTime:
      return defaultDatetimeFormatting;
    default:
      throw new Error();
  }
};

export const getFormattingSchema = (cellValueType: TeableCellValueType) => {
  switch (cellValueType) {
    case TeableCellValueType.Number:
      return numberFormattingSchema;
    case TeableCellValueType.DateTime:
      return datetimeFormattingSchema;
    default:
      return z.undefined();
  }
};
