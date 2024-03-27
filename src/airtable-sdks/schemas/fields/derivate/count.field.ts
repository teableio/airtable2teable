import { z } from 'zod';

export const countFieldOptionsSchema = z.object({
  isValid: z.boolean(),
  recordLinkFieldId: z.string().nullable().optional(),
});

export type ICountFieldOptionsVo = z.infer<typeof countFieldOptionsSchema>;
