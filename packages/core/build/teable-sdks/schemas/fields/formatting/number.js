import { z } from 'zod';
export var NumberFormattingType;
(function (NumberFormattingType) {
    NumberFormattingType["Decimal"] = "decimal";
    NumberFormattingType["Percent"] = "percent";
    NumberFormattingType["Currency"] = "currency";
})(NumberFormattingType || (NumberFormattingType = {}));
const baseFormatting = z.object({
    precision: z.number().max(5).min(0),
});
export const decimalFormattingSchema = baseFormatting.extend({
    type: z.literal(NumberFormattingType.Decimal),
});
export const percentFormattingSchema = baseFormatting.extend({
    type: z.literal(NumberFormattingType.Percent),
});
export const currencyFormattingSchema = baseFormatting.extend({
    type: z.literal(NumberFormattingType.Currency),
    symbol: z.string(),
});
export const numberFormattingSchema = z.union([
    decimalFormattingSchema,
    percentFormattingSchema,
    currencyFormattingSchema,
]);
export const defaultNumberFormatting = {
    type: NumberFormattingType.Decimal,
    precision: 2,
};
