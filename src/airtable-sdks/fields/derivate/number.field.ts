import { z } from 'zod';

export const numberFieldOptionsSchema = z.object({
  precision: z.number().min(0).max(8),
});

export type INumberFieldOptionsVo = z.infer<typeof numberFieldOptionsSchema>;
