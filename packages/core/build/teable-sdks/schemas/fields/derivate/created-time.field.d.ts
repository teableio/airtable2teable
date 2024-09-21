import { z } from 'zod';
export declare const createdTimeFieldOptionsSchema: z.ZodObject<{
    expression: z.ZodLiteral<"CREATED_TIME()">;
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
}, "strip", z.ZodTypeAny, {
    expression: "CREATED_TIME()";
    formatting: {
        date: string;
        timeZone: string;
        time: import("../formatting.shcema").TimeFormatting;
    };
}, {
    expression: "CREATED_TIME()";
    formatting: {
        date: string;
        timeZone: string;
        time: import("../formatting.shcema").TimeFormatting;
    };
}>;
export declare const createdTimeFieldOptionsRoSchema: z.ZodObject<Omit<{
    expression: z.ZodLiteral<"CREATED_TIME()">;
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
}, "expression">, "strip", z.ZodTypeAny, {
    formatting: {
        date: string;
        timeZone: string;
        time: import("../formatting.shcema").TimeFormatting;
    };
}, {
    formatting: {
        date: string;
        timeZone: string;
        time: import("../formatting.shcema").TimeFormatting;
    };
}>;
//# sourceMappingURL=created-time.field.d.ts.map