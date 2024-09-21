import { z } from 'zod';
export declare const countFieldOptionsSchema: z.ZodObject<{
    isValid: z.ZodBoolean;
    recordLinkFieldId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    isValid: boolean;
    recordLinkFieldId?: string | null | undefined;
}, {
    isValid: boolean;
    recordLinkFieldId?: string | null | undefined;
}>;
export type ICountFieldOptionsVo = z.infer<typeof countFieldOptionsSchema>;
//# sourceMappingURL=count.field.d.ts.map