import { z } from 'zod';
import { dateFieldOptionsSchema } from './date.field';
import { datetimeFieldOptionsSchema } from './date-time.field';
export const lastModifiedTimeFieldOptionsSchema = z.object({
    isValid: z.boolean(),
    referencedFieldIds: z.string().array().nullable(),
    result: z
        .union([dateFieldOptionsSchema, datetimeFieldOptionsSchema])
        .nullable(),
});
