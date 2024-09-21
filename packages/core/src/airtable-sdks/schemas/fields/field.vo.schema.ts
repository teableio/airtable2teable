import { AirtableFieldTypeEnum } from '@/types';
import { z } from 'zod';

import { unionFieldOptionsVoSchema } from './derivate';

export const fieldVoSchema = z.object({
  id: z.string(),

  name: z.string(),

  type: z.nativeEnum(AirtableFieldTypeEnum),

  description: z.string().optional(),

  options: unionFieldOptionsVoSchema.optional(),
});

export type IAirtableFieldVo = z.infer<typeof fieldVoSchema>;
