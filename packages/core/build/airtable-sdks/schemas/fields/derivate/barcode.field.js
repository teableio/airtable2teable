import { z } from 'zod';
export const barcodeCellValueSchema = z.object({
    type: z.string().nullable().optional(),
    text: z.string().optional(),
});
