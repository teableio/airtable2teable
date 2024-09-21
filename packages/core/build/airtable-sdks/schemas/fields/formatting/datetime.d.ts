import { z } from 'zod';
export declare enum DateFormattingPreset {
    Local = "l",
    Friendly = "LL",
    US = "M/D/YYYY",
    European = "D/M/YYYY",
    ISO = "YYYY-MM-DD"
}
export declare enum DateFormattingPresetName {
    Local = "local",
    Friendly = "friendly",
    US = "us",
    European = "european",
    ISO = "iso"
}
export declare const dateFormatSchema: z.ZodObject<{
    format: z.ZodOptional<z.ZodNativeEnum<typeof DateFormattingPreset>>;
    name: z.ZodNativeEnum<typeof DateFormattingPresetName>;
}, "strip", z.ZodTypeAny, {
    name: DateFormattingPresetName;
    format?: DateFormattingPreset | undefined;
}, {
    name: DateFormattingPresetName;
    format?: DateFormattingPreset | undefined;
}>;
//# sourceMappingURL=datetime.d.ts.map