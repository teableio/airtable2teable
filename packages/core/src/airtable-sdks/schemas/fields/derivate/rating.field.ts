import { AirtableIcon, R_COLOR_LIST } from '@/types';
import { z } from 'zod';

export const ratingFieldOptionsSchema = z.object({
  color: z.enum(R_COLOR_LIST),
  icon: z.nativeEnum(AirtableIcon),
  max: z.number().min(1).max(10),
});

export type IRatingFieldOptionsVo = z.infer<typeof ratingFieldOptionsSchema>;
