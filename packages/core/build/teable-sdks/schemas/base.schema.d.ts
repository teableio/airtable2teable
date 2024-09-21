import { z } from 'zod';
export declare const createBaseRoSchema: z.ZodObject<{
    spaceId: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
    icon: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    spaceId: string;
    name?: string | undefined;
    icon?: string | undefined;
}, {
    spaceId: string;
    name?: string | undefined;
    icon?: string | undefined;
}>;
export type ICreateBaseRo = z.infer<typeof createBaseRoSchema>;
export declare const createBaseVoSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    spaceId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    name: string;
    spaceId: string;
}, {
    id: string;
    name: string;
    spaceId: string;
}>;
export type ICreateBaseVo = z.infer<typeof createBaseVoSchema>;
//# sourceMappingURL=base.schema.d.ts.map