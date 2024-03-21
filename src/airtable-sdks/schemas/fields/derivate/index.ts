import { z } from 'zod';

import { aiTextFieldOptionsSchema } from './ai.text.field';
import { attachmentFieldOptionsSchema } from './attachment.field';
import { checkboxFieldOptionsSchema } from './checkbox.field';
import { countFieldOptionsSchema } from './count.field';
import { createdTimeFieldOptionsSchema } from './created.time.field';
import { currencyFieldOptionsSchema } from './currency.field';
import { dateFieldOptionsSchema } from './date.field';
import { datetimeFieldOptionsSchema } from './date-time.field';
import { formulaFieldOptionsSchema } from './formula.field';
import { lastModifiedTimeFieldOptionsSchema } from './last.modified.time.field';
import { linkFieldOptionsSchema } from './link.field';
import { lookupFieldOptionsSchema } from './lookup.field';
import { numberFieldOptionsSchema } from './number.field';
import { ratingFieldOptionsSchema } from './rating.field';
import { rollupFieldOptionsSchema } from './rollup.field';
import { selectFieldOptionsSchema } from './select.field';

export * from './ai.text.field';
export * from './attachment.field';
export * from './checkbox.field';
export * from './count.field';
export * from './currency.field';
export * from './date.field';
export * from './date-time.field';
export * from './duration.field';
export * from './formula.field';
export * from './last.modified.time.field';
export * from './link.field';
export * from './lookup.field';
export * from './number.field';
export * from './rating.field';
export * from './rollup.field';
export * from './select.field';

export const objectOptionsSchema = z.object({});

export const unionFieldOptionsVoSchema = z.union([
  objectOptionsSchema,
  aiTextFieldOptionsSchema,
  attachmentFieldOptionsSchema,
  checkboxFieldOptionsSchema,
  countFieldOptionsSchema,
  createdTimeFieldOptionsSchema,
  currencyFieldOptionsSchema,
  dateFieldOptionsSchema,
  datetimeFieldOptionsSchema,
  lastModifiedTimeFieldOptionsSchema,
  linkFieldOptionsSchema,
  numberFieldOptionsSchema,
  ratingFieldOptionsSchema,
  selectFieldOptionsSchema,
  lookupFieldOptionsSchema,
  formulaFieldOptionsSchema,
  rollupFieldOptionsSchema,
]);

export type IFieldOptionsVoSchema = z.infer<typeof unionFieldOptionsVoSchema>;
