import { z } from 'zod';
export declare const currencyFieldOptionsSchema: z.ZodObject<{
    precision: z.ZodNumber;
    symbol: z.ZodSymbol;
}, "strip", z.ZodTypeAny, {
    symbol: symbol;
    precision: number;
}, {
    symbol: symbol;
    precision: number;
}>;
export type ICurrencyFieldOptionsVo = z.infer<typeof currencyFieldOptionsSchema>;
//# sourceMappingURL=currency.field.d.ts.map