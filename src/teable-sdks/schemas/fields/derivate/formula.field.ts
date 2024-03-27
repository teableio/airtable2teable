import { z } from 'zod';

import { unionFormattingSchema } from '../formatting/index';
import { unionShowAsSchema } from '../show-as/index';

export const formulaFieldOptionsSchema = z.object({
  expression: z.string(),
  formatting: unionFormattingSchema.optional(),
  showAs: unionShowAsSchema.optional(),
});
