import { z } from 'zod';

import { numberFormattingSchema } from '../formatting';
import { numberShowAsSchema } from '../show-as';

export const numberFieldOptionsSchema = z.object({
  formatting: numberFormattingSchema,
  showAs: numberShowAsSchema.optional(),
});

export const numberFieldOptionsRoSchema = numberFieldOptionsSchema.partial({
  formatting: true,
  showAs: true,
});

export const numberCellValueSchema = z.number();

export type INumberCellValue = z.infer<typeof numberCellValueSchema>;
