import { z } from 'zod';
export declare enum NumberFormattingType {
    Decimal = "decimal",
    Percent = "percent",
    Currency = "currency"
}
export declare const decimalFormattingSchema: z.ZodObject<z.objectUtil.extendShape<{
    precision: z.ZodNumber;
}, {
    type: z.ZodLiteral<NumberFormattingType.Decimal>;
}>, "strip", z.ZodTypeAny, {
    type: NumberFormattingType.Decimal;
    precision: number;
}, {
    type: NumberFormattingType.Decimal;
    precision: number;
}>;
export declare const percentFormattingSchema: z.ZodObject<z.objectUtil.extendShape<{
    precision: z.ZodNumber;
}, {
    type: z.ZodLiteral<NumberFormattingType.Percent>;
}>, "strip", z.ZodTypeAny, {
    type: NumberFormattingType.Percent;
    precision: number;
}, {
    type: NumberFormattingType.Percent;
    precision: number;
}>;
export declare const currencyFormattingSchema: z.ZodObject<z.objectUtil.extendShape<{
    precision: z.ZodNumber;
}, {
    type: z.ZodLiteral<NumberFormattingType.Currency>;
    symbol: z.ZodString;
}>, "strip", z.ZodTypeAny, {
    symbol: string;
    type: NumberFormattingType.Currency;
    precision: number;
}, {
    symbol: string;
    type: NumberFormattingType.Currency;
    precision: number;
}>;
export declare const numberFormattingSchema: z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
    precision: z.ZodNumber;
}, {
    type: z.ZodLiteral<NumberFormattingType.Decimal>;
}>, "strip", z.ZodTypeAny, {
    type: NumberFormattingType.Decimal;
    precision: number;
}, {
    type: NumberFormattingType.Decimal;
    precision: number;
}>, z.ZodObject<z.objectUtil.extendShape<{
    precision: z.ZodNumber;
}, {
    type: z.ZodLiteral<NumberFormattingType.Percent>;
}>, "strip", z.ZodTypeAny, {
    type: NumberFormattingType.Percent;
    precision: number;
}, {
    type: NumberFormattingType.Percent;
    precision: number;
}>, z.ZodObject<z.objectUtil.extendShape<{
    precision: z.ZodNumber;
}, {
    type: z.ZodLiteral<NumberFormattingType.Currency>;
    symbol: z.ZodString;
}>, "strip", z.ZodTypeAny, {
    symbol: string;
    type: NumberFormattingType.Currency;
    precision: number;
}, {
    symbol: string;
    type: NumberFormattingType.Currency;
    precision: number;
}>]>;
export declare const defaultNumberFormatting: {
    type: NumberFormattingType;
    precision: number;
};
//# sourceMappingURL=number.d.ts.map