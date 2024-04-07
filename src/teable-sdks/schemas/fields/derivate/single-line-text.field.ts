import { z } from 'zod';

import { singleLineTextShowAsSchema } from '../show-as';

export const singlelineTextFieldOptionsSchema = z.object({
  showAs: singleLineTextShowAsSchema.optional(),
});
export const singleLineTextCelValueSchema = z.string().nullable().optional();

export type ISingleLineTextCellValue = z.infer<
  typeof singleLineTextCelValueSchema
>;
