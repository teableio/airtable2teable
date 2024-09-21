import { TeableCellValueType } from '@/types';
import { z } from 'zod';
export * from './datetime';
export * from './number';
export declare const unionFormattingSchema: z.ZodUnion<[z.ZodObject<{
    date: z.ZodString;
    time: z.ZodNativeEnum<typeof import("./datetime").TimeFormatting>;
    timeZone: z.ZodString;
}, "strip", z.ZodTypeAny, {
    date: string;
    timeZone: string;
    time: import("./datetime").TimeFormatting;
}, {
    date: string;
    timeZone: string;
    time: import("./datetime").TimeFormatting;
}>, z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
    precision: z.ZodNumber;
}, {
    type: z.ZodLiteral<import("./number").NumberFormattingType.Decimal>;
}>, "strip", z.ZodTypeAny, {
    type: import("./number").NumberFormattingType.Decimal;
    precision: number;
}, {
    type: import("./number").NumberFormattingType.Decimal;
    precision: number;
}>, z.ZodObject<z.objectUtil.extendShape<{
    precision: z.ZodNumber;
}, {
    type: z.ZodLiteral<import("./number").NumberFormattingType.Percent>;
}>, "strip", z.ZodTypeAny, {
    type: import("./number").NumberFormattingType.Percent;
    precision: number;
}, {
    type: import("./number").NumberFormattingType.Percent;
    precision: number;
}>, z.ZodObject<z.objectUtil.extendShape<{
    precision: z.ZodNumber;
}, {
    type: z.ZodLiteral<import("./number").NumberFormattingType.Currency>;
    symbol: z.ZodString;
}>, "strip", z.ZodTypeAny, {
    symbol: string;
    type: import("./number").NumberFormattingType.Currency;
    precision: number;
}, {
    symbol: string;
    type: import("./number").NumberFormattingType.Currency;
    precision: number;
}>]>]>;
export declare const getDefaultFormatting: (cellValueType: TeableCellValueType) => {
    date: import("./datetime").DateFormattingPreset;
    time: import("./datetime").TimeFormatting;
    timeZone: string;
} | {
    type: import("./number").NumberFormattingType;
    precision: number;
};
export declare const getFormattingSchema: (cellValueType: TeableCellValueType) => z.ZodObject<{
    date: z.ZodString;
    time: z.ZodNativeEnum<typeof import("./datetime").TimeFormatting>;
    timeZone: z.ZodString;
}, "strip", z.ZodTypeAny, {
    date: string;
    timeZone: string;
    time: import("./datetime").TimeFormatting;
}, {
    date: string;
    timeZone: string;
    time: import("./datetime").TimeFormatting;
}> | z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
    precision: z.ZodNumber;
}, {
    type: z.ZodLiteral<import("./number").NumberFormattingType.Decimal>;
}>, "strip", z.ZodTypeAny, {
    type: import("./number").NumberFormattingType.Decimal;
    precision: number;
}, {
    type: import("./number").NumberFormattingType.Decimal;
    precision: number;
}>, z.ZodObject<z.objectUtil.extendShape<{
    precision: z.ZodNumber;
}, {
    type: z.ZodLiteral<import("./number").NumberFormattingType.Percent>;
}>, "strip", z.ZodTypeAny, {
    type: import("./number").NumberFormattingType.Percent;
    precision: number;
}, {
    type: import("./number").NumberFormattingType.Percent;
    precision: number;
}>, z.ZodObject<z.objectUtil.extendShape<{
    precision: z.ZodNumber;
}, {
    type: z.ZodLiteral<import("./number").NumberFormattingType.Currency>;
    symbol: z.ZodString;
}>, "strip", z.ZodTypeAny, {
    symbol: string;
    type: import("./number").NumberFormattingType.Currency;
    precision: number;
}, {
    symbol: string;
    type: import("./number").NumberFormattingType.Currency;
    precision: number;
}>]> | z.ZodUndefined;
//# sourceMappingURL=index.d.ts.map