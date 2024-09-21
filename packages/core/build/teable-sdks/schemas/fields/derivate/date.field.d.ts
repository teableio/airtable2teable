import { z } from 'zod';
export declare const dateFieldOptionsSchema: z.ZodObject<{
    formatting: z.ZodObject<{
        date: z.ZodString;
        time: z.ZodNativeEnum<typeof import("../formatting.shcema").TimeFormatting>;
        timeZone: z.ZodEffects<z.ZodString, string, string>;
    }, "strip", z.ZodTypeAny, {
        date: string;
        timeZone: string;
        time: import("../formatting.shcema").TimeFormatting;
    }, {
        date: string;
        timeZone: string;
        time: import("../formatting.shcema").TimeFormatting;
    }>;
    defaultValue: z.ZodOptional<z.ZodEnum<["now"]>>;
}, "strip", z.ZodTypeAny, {
    formatting: {
        date: string;
        timeZone: string;
        time: import("../formatting.shcema").TimeFormatting;
    };
    defaultValue?: "now" | undefined;
}, {
    formatting: {
        date: string;
        timeZone: string;
        time: import("../formatting.shcema").TimeFormatting;
    };
    defaultValue?: "now" | undefined;
}>;
export declare const dataFieldCellValueSchema: z.ZodString;
export type IDateCellValue = z.infer<typeof dataFieldCellValueSchema>;
//# sourceMappingURL=date.field.d.ts.map