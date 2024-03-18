import { extend } from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import { z } from 'zod';

import { datetimeFormattingSchema } from '../formatting.shcema';

extend(timezone);

export const createdTimeFieldOptionsSchema = z.object({
  expression: z.literal('CREATED_TIME()'),
  formatting: datetimeFormattingSchema,
});

export const createdTimeFieldOptionsRoSchema =
  createdTimeFieldOptionsSchema.omit({
    expression: true,
  });
