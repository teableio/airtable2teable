import { z } from 'zod';
export declare const buttonCellValueSchema: z.ZodObject<{
    label: z.ZodString;
    url: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    url: string | null;
    label: string;
}, {
    url: string | null;
    label: string;
}>;
export type IButtonCellValueVo = z.infer<typeof buttonCellValueSchema>;
//# sourceMappingURL=button.field.d.ts.map