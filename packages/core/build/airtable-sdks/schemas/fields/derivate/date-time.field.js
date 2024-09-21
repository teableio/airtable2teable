import { ATIME_ZONE_LIST } from '@/types';
import { z } from 'zod';
import { dateFormatSchema } from '../formatting';
export const datetimeFieldOptionsSchema = z.object({
    timeZone: z.enum(ATIME_ZONE_LIST),
    dateFormat: dateFormatSchema,
});
