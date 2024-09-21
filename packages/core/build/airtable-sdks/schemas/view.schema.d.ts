import { z } from 'zod';
import { AirtableViewTypeEnum } from '../../types';
export declare const viewVoSchema: z.ZodObject<{
    id: z.ZodString;
    type: z.ZodNativeEnum<typeof AirtableViewTypeEnum>;
    name: z.ZodString;
    visibleFieldIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    id: string;
    name: string;
    type: AirtableViewTypeEnum;
    visibleFieldIds?: string[] | undefined;
}, {
    id: string;
    name: string;
    type: AirtableViewTypeEnum;
    visibleFieldIds?: string[] | undefined;
}>;
export type IAirtableViewVo = z.infer<typeof viewVoSchema>;
//# sourceMappingURL=view.schema.d.ts.map