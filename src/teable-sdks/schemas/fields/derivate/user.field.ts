import { z } from 'zod';

export const userFieldOptionsSchema = z.object({
  isMultiple: z.boolean(),
  shouldNotify: z.boolean(),
});
