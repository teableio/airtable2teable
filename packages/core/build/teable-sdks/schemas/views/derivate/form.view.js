import { z } from 'zod';
export const formViewOptionSchema = z
    .object({
    coverUrl: z.string().optional(),
    logoUrl: z.string().optional(),
    submitLabel: z.string().optional(),
})
    .strict();
