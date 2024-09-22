import { z } from 'zod';

import { DURATION_LIST } from '@/types';

export const durationFieldOptionsSchema = z.object({
  durationFormat: z.enum(DURATION_LIST),
});

export type IDurationFieldOptionsVo = z.infer<
  typeof durationFieldOptionsSchema
>;
