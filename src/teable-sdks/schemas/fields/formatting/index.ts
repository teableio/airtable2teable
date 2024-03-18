import { TeableCellValueType } from 'types';
import { z } from 'zod';

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
