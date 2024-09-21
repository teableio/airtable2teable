import { z } from 'zod';
export declare enum TimeFormatting {
    Hour24 = "HH:mm",
    Hour12 = "hh:mm A",
    None = "None"
}
export declare const datetimeFormattingSchema: z.ZodObject<{
    date: z.ZodString;
    time: z.ZodNativeEnum<typeof TimeFormatting>;
    timeZone: z.ZodEffects<z.ZodString, string, string>;
}, "strip", z.ZodTypeAny, {
    date: string;
    timeZone: string;
    time: TimeFormatting;
}, {
    date: string;
    timeZone: string;
    time: TimeFormatting;
}>;
//# sourceMappingURL=formatting.shcema.d.ts.map