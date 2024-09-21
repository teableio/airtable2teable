import { z } from 'zod';
export declare const barcodeCellValueSchema: z.ZodObject<{
    type: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    text: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    type?: string | null | undefined;
    text?: string | undefined;
}, {
    type?: string | null | undefined;
    text?: string | undefined;
}>;
export type IBarcodeCellValueVo = z.infer<typeof barcodeCellValueSchema>;
//# sourceMappingURL=barcode.field.d.ts.map