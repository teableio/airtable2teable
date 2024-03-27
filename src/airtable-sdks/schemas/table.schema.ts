import { z } from 'zod';

import { fieldVoSchema } from './fields';
import { viewVoSchema } from './view.schema';

export const tableVoSchema = z.object({
  id: z.string(),
  primaryFieldId: z.string(),
  name: z.string(),
  description: z.string().optional(),
  fields: fieldVoSchema.array(),
  views: viewVoSchema.array(),
});

export type IAirtableTableVo = z.infer<typeof tableVoSchema>;
