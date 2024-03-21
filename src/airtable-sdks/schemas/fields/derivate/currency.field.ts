import { z } from 'zod';

export const currencyFieldOptionsSchema = z.object({
  precision: z.number(),
  symbol: z.symbol(),
});

export type ICurrencyFieldOptionsVo = z.infer<
  typeof currencyFieldOptionsSchema
>;
