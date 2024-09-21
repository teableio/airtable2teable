import * as dayjs from 'dayjs';
import * as timezone from 'dayjs/plugin/timezone';
import { z } from 'zod';
import { datetimeFormattingSchema } from '../formatting.shcema';
dayjs.extend(timezone);
export const dateFieldOptionsSchema = z.object({
    formatting: datetimeFormattingSchema,
    defaultValue: z.enum(['now']).optional(),
});
export const dataFieldCellValueSchema = z
    .string()
    .datetime({ precision: 3, offset: true });