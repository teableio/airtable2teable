import { z } from 'zod';
export const getSpaceVoSchema = z.object({
    id: z.string(),
    name: z.string(),
});
