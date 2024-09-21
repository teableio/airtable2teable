import { z } from 'zod';
export declare const formViewOptionSchema: z.ZodObject<{
    coverUrl: z.ZodOptional<z.ZodString>;
    logoUrl: z.ZodOptional<z.ZodString>;
    submitLabel: z.ZodOptional<z.ZodString>;
}, "strict", z.ZodTypeAny, {
    coverUrl?: string | undefined;
    logoUrl?: string | undefined;
    submitLabel?: string | undefined;
}, {
    coverUrl?: string | undefined;
    logoUrl?: string | undefined;
    submitLabel?: string | undefined;
}>;
export type IFormViewOptions = z.infer<typeof formViewOptionSchema>;
//# sourceMappingURL=form.view.d.ts.map