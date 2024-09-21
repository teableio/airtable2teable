import { z } from 'zod';
export declare const ROLLUP_FUNCTIONS: readonly ["countall({values})", "counta({values})", "count({values})", "sum({values})", "max({values})", "min({values})", "and({values})", "or({values})", "xor({values})", "array_join({values})", "array_unique({values})", "array_compact({values})", "concatenate({values})"];
export declare const rollupFieldOptionsSchema: z.ZodObject<{
    expression: z.ZodEnum<["countall({values})", "counta({values})", "count({values})", "sum({values})", "max({values})", "min({values})", "and({values})", "or({values})", "xor({values})", "array_join({values})", "array_unique({values})", "array_compact({values})", "concatenate({values})"]>;
    formatting: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
        date: z.ZodString;
        time: z.ZodNativeEnum<typeof import("../formatting").TimeFormatting>;
        timeZone: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        date: string;
        timeZone: string;
        time: import("../formatting").TimeFormatting;
    }, {
        date: string;
        timeZone: string;
        time: import("../formatting").TimeFormatting;
    }>, z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        precision: z.ZodNumber;
    }, {
        type: z.ZodLiteral<import("../formatting").NumberFormattingType.Decimal>;
    }>, "strip", z.ZodTypeAny, {
        type: import("../formatting").NumberFormattingType.Decimal;
        precision: number;
    }, {
        type: import("../formatting").NumberFormattingType.Decimal;
        precision: number;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        precision: z.ZodNumber;
    }, {
        type: z.ZodLiteral<import("../formatting").NumberFormattingType.Percent>;
    }>, "strip", z.ZodTypeAny, {
        type: import("../formatting").NumberFormattingType.Percent;
        precision: number;
    }, {
        type: import("../formatting").NumberFormattingType.Percent;
        precision: number;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        precision: z.ZodNumber;
    }, {
        type: z.ZodLiteral<import("../formatting").NumberFormattingType.Currency>;
        symbol: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        symbol: string;
        type: import("../formatting").NumberFormattingType.Currency;
        precision: number;
    }, {
        symbol: string;
        type: import("../formatting").NumberFormattingType.Currency;
        precision: number;
    }>]>]>>;
    showAs: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
        type: z.ZodNativeEnum<typeof import("../show-as").SingleLineTextDisplayType>;
    }, "strict", z.ZodTypeAny, {
        type: import("../show-as").SingleLineTextDisplayType;
    }, {
        type: import("../show-as").SingleLineTextDisplayType;
    }>, z.ZodUnion<[z.ZodObject<{
        type: z.ZodNativeEnum<typeof import("../show-as").SingleNumberDisplayType>;
        color: z.ZodNativeEnum<typeof import("../../../../types").Colors>;
        showValue: z.ZodBoolean;
        maxValue: z.ZodNumber;
    }, "strict", z.ZodTypeAny, {
        type: import("../show-as").SingleNumberDisplayType;
        color: import("../../../../types").Colors;
        showValue: boolean;
        maxValue: number;
    }, {
        type: import("../show-as").SingleNumberDisplayType;
        color: import("../../../../types").Colors;
        showValue: boolean;
        maxValue: number;
    }>, z.ZodObject<{
        type: z.ZodNativeEnum<typeof import("../show-as").MultiNumberDisplayType>;
        color: z.ZodNativeEnum<typeof import("../../../../types").Colors>;
    }, "strict", z.ZodTypeAny, {
        type: import("../show-as").MultiNumberDisplayType;
        color: import("../../../../types").Colors;
    }, {
        type: import("../show-as").MultiNumberDisplayType;
        color: import("../../../../types").Colors;
    }>]>]>>;
}, "strip", z.ZodTypeAny, {
    expression: "countall({values})" | "counta({values})" | "count({values})" | "sum({values})" | "max({values})" | "min({values})" | "and({values})" | "or({values})" | "xor({values})" | "array_join({values})" | "array_unique({values})" | "array_compact({values})" | "concatenate({values})";
    formatting?: {
        date: string;
        timeZone: string;
        time: import("../formatting").TimeFormatting;
    } | {
        type: import("../formatting").NumberFormattingType.Decimal;
        precision: number;
    } | {
        type: import("../formatting").NumberFormattingType.Percent;
        precision: number;
    } | {
        symbol: string;
        type: import("../formatting").NumberFormattingType.Currency;
        precision: number;
    } | undefined;
    showAs?: {
        type: import("../show-as").SingleNumberDisplayType;
        color: import("../../../../types").Colors;
        showValue: boolean;
        maxValue: number;
    } | {
        type: import("../show-as").MultiNumberDisplayType;
        color: import("../../../../types").Colors;
    } | {
        type: import("../show-as").SingleLineTextDisplayType;
    } | undefined;
}, {
    expression: "countall({values})" | "counta({values})" | "count({values})" | "sum({values})" | "max({values})" | "min({values})" | "and({values})" | "or({values})" | "xor({values})" | "array_join({values})" | "array_unique({values})" | "array_compact({values})" | "concatenate({values})";
    formatting?: {
        date: string;
        timeZone: string;
        time: import("../formatting").TimeFormatting;
    } | {
        type: import("../formatting").NumberFormattingType.Decimal;
        precision: number;
    } | {
        type: import("../formatting").NumberFormattingType.Percent;
        precision: number;
    } | {
        symbol: string;
        type: import("../formatting").NumberFormattingType.Currency;
        precision: number;
    } | undefined;
    showAs?: {
        type: import("../show-as").SingleNumberDisplayType;
        color: import("../../../../types").Colors;
        showValue: boolean;
        maxValue: number;
    } | {
        type: import("../show-as").MultiNumberDisplayType;
        color: import("../../../../types").Colors;
    } | {
        type: import("../show-as").SingleLineTextDisplayType;
    } | undefined;
}>;
export declare const rollupCelValueSchema: z.ZodAny;
export type IRollupCellValue = z.infer<typeof rollupCelValueSchema>;
//# sourceMappingURL=rollup.field.d.ts.map