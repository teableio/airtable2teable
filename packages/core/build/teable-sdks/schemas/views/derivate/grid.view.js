import { RowHeightLevel } from '@/types';
import { z } from 'zod';
export const gridViewOptionSchema = z
    .object({
    rowHeight: z.nativeEnum(RowHeightLevel).optional(),
    frozenColumnCount: z.number().optional(),
})
    .strict();
