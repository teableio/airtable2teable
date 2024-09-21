import { z } from 'zod';
export declare const numberFieldOptionsSchema: z.ZodObject<{
    formatting: z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
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
    }>]>;
    showAs: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
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
    }>]>>;
}, "strip", z.ZodTypeAny, {
    formatting: {
        type: import("../formatting").NumberFormattingType.Decimal;
        precision: number;
    } | {
        type: import("../formatting").NumberFormattingType.Percent;
        precision: number;
    } | {
        symbol: string;
        type: import("../formatting").NumberFormattingType.Currency;
        precision: number;
    };
    showAs?: {
        type: import("../show-as").SingleNumberDisplayType;
        color: import("../../../../types").Colors;
        showValue: boolean;
        maxValue: number;
    } | {
        type: import("../show-as").MultiNumberDisplayType;
        color: import("../../../../types").Colors;
    } | undefined;
}, {
    formatting: {
        type: import("../formatting").NumberFormattingType.Decimal;
        precision: number;
    } | {
        type: import("../formatting").NumberFormattingType.Percent;
        precision: number;
    } | {
        symbol: string;
        type: import("../formatting").NumberFormattingType.Currency;
        precision: number;
    };
    showAs?: {
        type: import("../show-as").SingleNumberDisplayType;
        color: import("../../../../types").Colors;
        showValue: boolean;
        maxValue: number;
    } | {
        type: import("../show-as").MultiNumberDisplayType;
        color: import("../../../../types").Colors;
    } | undefined;
}>;
export declare const numberFieldOptionsRoSchema: z.ZodObject<{
    formatting: z.ZodOptional<z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
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
    }>]>>;
    showAs: z.ZodOptional<z.ZodOptional<z.ZodUnion<[z.ZodObject<{
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
    }>]>>>;
}, "strip", z.ZodTypeAny, {
    formatting?: {
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
    } | undefined;
}, {
    formatting?: {
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
    } | undefined;
}>;
export declare const numberCellValueSchema: z.ZodNumber;
export type INumberCellValue = z.infer<typeof numberCellValueSchema>;
//# sourceMappingURL=number.field.d.ts.map