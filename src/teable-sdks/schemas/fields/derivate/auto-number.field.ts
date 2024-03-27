import { z } from 'zod';

export const autoNumberFieldOptionsSchema = z.object({
  expression: z.literal('AUTO_NUMBER()'),
});

export const autoNumberFieldOptionsRoSchema = autoNumberFieldOptionsSchema.omit(
  {
    expression: true,
  },
);
