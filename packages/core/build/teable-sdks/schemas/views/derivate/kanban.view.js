import { z } from 'zod';
export const kanbanViewOptionSchema = z
    .object({
    groupingFieldId: z.string(),
})
    .strict();
