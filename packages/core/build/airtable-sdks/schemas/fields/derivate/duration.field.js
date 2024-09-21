import { DURATION_LIST } from '@/types';
import { z } from 'zod';
export const durationFieldOptionsSchema = z.object({
    durationFormat: z.enum(DURATION_LIST),
});
