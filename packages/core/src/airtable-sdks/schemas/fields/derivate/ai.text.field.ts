import { z } from 'zod';

import { AirtableCellState } from '../../../../types';

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

export const aiTextCellValueSchema = z.object({
  state: z.nativeEnum(AirtableCellState),
  isStale: z.boolean(),
  errorType: z.string().optional(),
  value: z.string().nullable(),
});

export type IAiTextCellValueVo = z.infer<typeof aiTextCellValueSchema>;
