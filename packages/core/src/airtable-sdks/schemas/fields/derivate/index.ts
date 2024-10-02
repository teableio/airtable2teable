import { z } from 'zod';

import {
  aiTextCellValueSchema,
  aiTextFieldOptionsSchema,
} from './ai.text.field';
import {
  attachmentCellValueSchema,
  attachmentFieldOptionsSchema,
} from './attachment.field';
import { barcodeCellValueSchema } from './barcode.field';
import { buttonCellValueSchema } from './button.field';
import {
  checkboxCellValueSchema,
  checkboxFieldOptionsSchema,
} from './checkbox.field';
import { collaboratorCellValueSchema } from './collaborator.field';
import { countFieldOptionsSchema } from './count.field';
import { createdTimeFieldOptionsSchema } from './created.time.field';
import { currencyFieldOptionsSchema } from './currency.field';
import { dateFieldOptionsSchema } from './date.field';
import { datetimeFieldOptionsSchema } from './date-time.field';
import {
  formulaCellValueSchema,
  formulaFieldOptionsSchema,
} from './formula.field';
import { lastModifiedTimeFieldOptionsSchema } from './last.modified.time.field';
import { LinkCellValueSchema, linkFieldOptionsSchema } from './link.field';
import {
  lookupCellValueSchema,
  lookupFieldOptionsSchema,
} from './lookup.field';
import {
  numberCellValueSchema,
  numberFieldOptionsSchema,
} from './number.field';
import { ratingFieldOptionsSchema } from './rating.field';
import { rollupFieldOptionsSchema } from './rollup.field';
import { selectFieldOptionsSchema } from './select.field';

export * from './ai.text.field';
export * from './attachment.field';
export * from './barcode.field';
export * from './button.field';
export * from './checkbox.field';
export * from './collaborator.field';
export * from './count.field';
export * from './created.time.field';
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
export * from './text.field';
export const objectOptionsSchema = z.record(z.any());

export type IObjectOptionsVo = z.infer<typeof objectOptionsSchema>;

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

export type IFieldOptionsVo = z.infer<typeof unionFieldOptionsVoSchema>;

export const unionFieldCellVoSchema = z.union([
  aiTextCellValueSchema,
  attachmentCellValueSchema,
  barcodeCellValueSchema,
  buttonCellValueSchema,
  checkboxCellValueSchema,
  collaboratorCellValueSchema,
  countFieldOptionsSchema,
  formulaCellValueSchema,
  LinkCellValueSchema,
  lookupCellValueSchema,
  numberCellValueSchema,
]);

export type IFieldCellVo = z.infer<typeof unionFieldCellVoSchema>;
