import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import { z } from 'zod';

import { datetimeFormattingSchema } from '../formatting';

dayjs.extend(timezone);

export const lastModifiedTimeFieldOptionsSchema = z.object({
  expression: z.literal('LAST_MODIFIED_TIME()'),
  formatting: datetimeFormattingSchema,
});

export const lastModifiedTimeFieldOptionsRoSchema =
  lastModifiedTimeFieldOptionsSchema.omit({
    expression: true,
  });
