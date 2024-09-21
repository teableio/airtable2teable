import { z } from 'zod';
export declare const singlelineTextFieldOptionsSchema: z.ZodObject<{
    showAs: z.ZodOptional<z.ZodObject<{
        type: z.ZodNativeEnum<typeof import("../show-as").SingleLineTextDisplayType>;
    }, "strip", z.ZodTypeAny, {
        type: import("../show-as").SingleLineTextDisplayType;
    }, {
        type: import("../show-as").SingleLineTextDisplayType;
    }>>;
}, "strip", z.ZodTypeAny, {
    showAs?: {
        type: import("../show-as").SingleLineTextDisplayType;
    } | undefined;
}, {
    showAs?: {
        type: import("../show-as").SingleLineTextDisplayType;
    } | undefined;
}>;
export declare const singleLineTextCelValueSchema: z.ZodOptional<z.ZodNullable<z.ZodString>>;
export type ISingleLineTextCellValue = z.infer<typeof singleLineTextCelValueSchema>;
//# sourceMappingURL=single-line-text.field.d.ts.map