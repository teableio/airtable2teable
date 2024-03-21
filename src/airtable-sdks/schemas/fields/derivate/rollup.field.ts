import { z } from 'zod';

import { lookupFieldOptionsSchema } from './lookup.field';

export const rollupFieldOptionsSchema = lookupFieldOptionsSchema.merge(
  z.object({
    referencedFieldIds: z.string().array().optional(),
  }),
);

export type IRollupFieldOptionsVo = z.infer<typeof rollupFieldOptionsSchema>;
