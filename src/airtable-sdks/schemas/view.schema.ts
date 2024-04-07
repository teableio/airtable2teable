import { z } from 'zod';

import { AirtableViewTypeEnum } from '../../types';

export const viewVoSchema = z.object({
  id: z.string(),
  type: z.nativeEnum(AirtableViewTypeEnum),
  name: z.string(),
  visibleFieldIds: z.string().array().optional(),
});

export type IAirtableViewVo = z.infer<typeof viewVoSchema>;
