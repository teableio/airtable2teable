import { z } from 'zod';

import { ATIME_ZONE_LIST } from '@/types';

import { dateFormatSchema } from '../formatting';

export const datetimeFieldOptionsSchema = z.object({
  timeZone: z.enum(ATIME_ZONE_LIST),
  dateFormat: dateFormatSchema,
});

export type IDatetimeFieldOptionsVo = z.infer<
  typeof datetimeFieldOptionsSchema
>;
