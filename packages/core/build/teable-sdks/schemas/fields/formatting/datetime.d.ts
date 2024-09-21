import { z } from 'zod';
export declare enum DateFormattingPreset {
    US = "M/D/YYYY",
    European = "D/M/YYYY",
    Asian = "YYYY/MM/DD",
    ISO = "YYYY-MM-DD",
    YM = "YYYY-MM",
    MD = "MM-DD",
    Y = "YYYY",
    M = "MM",
    D = "DD"
}
export declare enum TimeFormatting {
    Hour24 = "HH:mm",
    Hour12 = "hh:mm A",
    None = "None"
}
export declare const datetimeFormattingSchema: z.ZodObject<{
    date: z.ZodString;
    time: z.ZodNativeEnum<typeof TimeFormatting>;
    timeZone: z.ZodString;
}, "strip", z.ZodTypeAny, {
    date: string;
    timeZone: string;
    time: TimeFormatting;
}, {
    date: string;
    timeZone: string;
    time: TimeFormatting;
}>;
export declare const defaultDatetimeFormatting: {
    date: DateFormattingPreset;
    time: TimeFormatting;
    timeZone: string;
};
//# sourceMappingURL=datetime.d.ts.map