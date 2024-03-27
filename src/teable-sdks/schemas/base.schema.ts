import { z } from 'zod';

export const createBaseRoSchema = z.object({
  spaceId: z.string(),
  name: z.string().optional(),
  icon: z.string().optional(),
});

export type ICreateBaseRo = z.infer<typeof createBaseRoSchema>;

export const createBaseVoSchema = z.object({
  id: z.string(),
  name: z.string(),
  spaceId: z.string(),
});

export type ICreateBaseVo = z.infer<typeof createBaseVoSchema>;
