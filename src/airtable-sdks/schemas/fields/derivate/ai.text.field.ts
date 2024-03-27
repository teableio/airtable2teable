import { z } from 'zod';

export const aiTextFieldOptionsSchema = z.object({
  prompt: z
    .union([
      z.string(),
      z.object({
        field: z.record(z.string()),
      }),
    ])
    .array()
    .optional(),
  referencedFieldIds: z.string().array().optional(),
});

export type IAiTextFieldOptionsVo = z.infer<typeof aiTextFieldOptionsSchema>;
