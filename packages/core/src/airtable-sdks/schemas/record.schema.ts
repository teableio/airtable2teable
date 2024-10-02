import { z } from 'zod';

import { unionFieldCellVoSchema } from './fields';

export const recordVoSchema = z.object({
  id: z.string(),
  createdTime: z.string(),
  fields: z.record(unionFieldCellVoSchema),
  commentCount: z.number().optional(),
});

export type IAirtableRecordVo = z.infer<typeof recordVoSchema>;
