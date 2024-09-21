import { z } from 'zod';
import { dateFormatSchema } from '../formatting';
export const dateFieldOptionsSchema = z.object({
    dateFormat: dateFormatSchema,
});
