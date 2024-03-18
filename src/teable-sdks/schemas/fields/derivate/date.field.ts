import { extend } from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import { z } from 'zod';

import { datetimeFormattingSchema } from '../formatting.shcema';

extend(timezone);

export const dateFieldOptionsSchema = z.object({
  formatting: datetimeFormattingSchema,
  defaultValue: z.enum(['now'] as const).optional(),
});
