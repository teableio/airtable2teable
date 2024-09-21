import { z } from 'zod';
export declare const autoNumberFieldOptionsSchema: z.ZodObject<{
    expression: z.ZodLiteral<"AUTO_NUMBER()">;
}, "strip", z.ZodTypeAny, {
    expression: "AUTO_NUMBER()";
}, {
    expression: "AUTO_NUMBER()";
}>;
export declare const autoNumberFieldOptionsRoSchema: z.ZodObject<Omit<{
    expression: z.ZodLiteral<"AUTO_NUMBER()">;
}, "expression">, "strip", z.ZodTypeAny, {}, {}>;
export declare const autoNumberCellValueSchema: z.ZodNumber;
export type IAutoNumberCellValue = z.infer<typeof autoNumberCellValueSchema>;
//# sourceMappingURL=auto-number.field.d.ts.map