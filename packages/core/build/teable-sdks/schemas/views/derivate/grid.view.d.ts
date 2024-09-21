import { RowHeightLevel } from '@/types';
import { z } from 'zod';
export type IGridViewOptions = z.infer<typeof gridViewOptionSchema>;
export declare const gridViewOptionSchema: z.ZodObject<{
    rowHeight: z.ZodOptional<z.ZodNativeEnum<typeof RowHeightLevel>>;
    frozenColumnCount: z.ZodOptional<z.ZodNumber>;
}, "strict", z.ZodTypeAny, {
    rowHeight?: RowHeightLevel | undefined;
    frozenColumnCount?: number | undefined;
}, {
    rowHeight?: RowHeightLevel | undefined;
    frozenColumnCount?: number | undefined;
}>;
//# sourceMappingURL=grid.view.d.ts.map