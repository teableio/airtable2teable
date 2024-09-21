import * as dayjs from 'dayjs';
import * as timezone from 'dayjs/plugin/timezone';
import { z } from 'zod';

import { datetimeFormattingSchema } from '../formatting';
// @ts-ignore
dayjs.extend(timezone);

export const lastModifiedTimeFieldOptionsSchema = z.object({
  expression: z.literal('LAST_MODIFIED_TIME()'),
  formatting: datetimeFormattingSchema,
});

export const lastModifiedTimeFieldOptionsRoSchema =
  lastModifiedTimeFieldOptionsSchema.omit({
    expression: true,
  });
