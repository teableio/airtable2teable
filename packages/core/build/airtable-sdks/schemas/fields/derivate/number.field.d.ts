import { z } from 'zod';
export declare const numberFieldOptionsSchema: z.ZodObject<{
    precision: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    precision: number;
}, {
    precision: number;
}>;
export type INumberFieldOptionsVo = z.infer<typeof numberFieldOptionsSchema>;
export declare const numberCellValueSchema: z.ZodNumber;
export type INumberCellValueVo = z.infer<typeof numberCellValueSchema>;
//# sourceMappingURL=number.field.d.ts.map