import { z } from 'zod';

import { RowHeightLevel } from '@/types';

export type IGridViewOptions = z.infer<typeof gridViewOptionSchema>;

export const gridViewOptionSchema = z
  .object({
    rowHeight: z.nativeEnum(RowHeightLevel).optional(),
    frozenColumnCount: z.number().optional(),
  })
  .strict();
