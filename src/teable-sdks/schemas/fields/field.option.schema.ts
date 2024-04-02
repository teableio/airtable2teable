import { z } from 'zod';

import {
  attachmentFieldOptionsSchema,
  autoNumberFieldOptionsRoSchema,
  autoNumberFieldOptionsSchema,
  checkboxFieldOptionsSchema,
  createdTimeFieldOptionsRoSchema,
  createdTimeFieldOptionsSchema,
  dateFieldOptionsSchema,
  formulaFieldOptionsSchema,
  lastModifiedTimeFieldOptionsRoSchema,
  lastModifiedTimeFieldOptionsSchema,
  linkFieldOptionsRoSchema,
  linkFieldOptionsSchema,
  longTextFieldOptionsSchema,
  numberFieldOptionsRoSchema,
  numberFieldOptionsSchema,
  ratingFieldOptionsSchema,
  rollupFieldOptionsSchema,
  selectFieldOptionsRoSchema,
  selectFieldOptionsSchema,
  singlelineTextFieldOptionsSchema,
  userFieldOptionsSchema,
} from './derivate';

export const unionFieldOptions = z.union([
  rollupFieldOptionsSchema.strict(),
  formulaFieldOptionsSchema.strict(),
  linkFieldOptionsSchema.strict(),
  dateFieldOptionsSchema.strict(),
  checkboxFieldOptionsSchema.strict(),
  attachmentFieldOptionsSchema.strict(),
  singlelineTextFieldOptionsSchema.strict(),
  ratingFieldOptionsSchema.strict(),
  userFieldOptionsSchema.strict(),
  longTextFieldOptionsSchema.strict(),
]);

export const unionFieldOptionsVoSchema = z.union([
  unionFieldOptions,
  linkFieldOptionsSchema.strict(),
  selectFieldOptionsSchema.strict(),
  numberFieldOptionsSchema.strict(),
  autoNumberFieldOptionsSchema.strict(),
  createdTimeFieldOptionsSchema.strict(),
  lastModifiedTimeFieldOptionsSchema.strict(),
]);

export const unionFieldOptionsRoSchema = z.union([
  unionFieldOptions,
  linkFieldOptionsRoSchema.strict(),
  selectFieldOptionsRoSchema.strict(),
  numberFieldOptionsRoSchema.strict(),
  autoNumberFieldOptionsRoSchema.strict(),
  createdTimeFieldOptionsRoSchema.strict(),
  lastModifiedTimeFieldOptionsRoSchema.strict(),
]);

export const lookupOptionsVoSchema = linkFieldOptionsSchema
  .pick({
    foreignTableId: true,
    lookupFieldId: true,
    relationship: true,
    fkHostTableName: true,
    selfKeyName: true,
    foreignKeyName: true,
  })
  .merge(
    z.object({
      linkFieldId: z.string(),
    }),
  );

export const lookupOptionsRoSchema = lookupOptionsVoSchema.pick({
  foreignTableId: true,
  lookupFieldId: true,
  linkFieldId: true,
});
