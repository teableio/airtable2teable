import { z } from 'zod';

export const getSpaceVoSchema = z.object({
  id: z.string(),
  name: z.string(),
});

export type IGetSpaceVo = z.infer<typeof getSpaceVoSchema>;
