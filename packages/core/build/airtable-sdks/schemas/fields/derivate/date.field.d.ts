import { z } from 'zod';
export declare const dateFieldOptionsSchema: z.ZodObject<{
    dateFormat: z.ZodObject<{
        format: z.ZodOptional<z.ZodNativeEnum<typeof import("../formatting").DateFormattingPreset>>;
        name: z.ZodNativeEnum<typeof import("../formatting").DateFormattingPresetName>;
    }, "strip", z.ZodTypeAny, {
        name: import("../formatting").DateFormattingPresetName;
        format?: import("../formatting").DateFormattingPreset | undefined;
    }, {
        name: import("../formatting").DateFormattingPresetName;
        format?: import("../formatting").DateFormattingPreset | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    dateFormat: {
        name: import("../formatting").DateFormattingPresetName;
        format?: import("../formatting").DateFormattingPreset | undefined;
    };
}, {
    dateFormat: {
        name: import("../formatting").DateFormattingPresetName;
        format?: import("../formatting").DateFormattingPreset | undefined;
    };
}>;
export type IDateFieldOptionsVo = z.infer<typeof dateFieldOptionsSchema>;
//# sourceMappingURL=date.field.d.ts.map