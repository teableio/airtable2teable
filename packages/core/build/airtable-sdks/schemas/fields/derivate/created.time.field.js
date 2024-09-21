import { z } from 'zod';
import { dateFieldOptionsSchema } from './date.field';
import { datetimeFieldOptionsSchema } from './date-time.field';
export const createdTimeFieldOptionsSchema = z
    .union([dateFieldOptionsSchema, datetimeFieldOptionsSchema])
    .optional();
