import { z } from 'zod';
import { unionFormattingSchema } from '../formatting';
import { unionShowAsSchema } from '../show-as';
export const ROLLUP_FUNCTIONS = [
    'countall({values})',
    'counta({values})',
    'count({values})',
    'sum({values})',
    'max({values})',
    'min({values})',
    'and({values})',
    'or({values})',
    'xor({values})',
    'array_join({values})',
    'array_unique({values})',
    'array_compact({values})',
    'concatenate({values})',
];
export const rollupFieldOptionsSchema = z.object({
    expression: z.enum(ROLLUP_FUNCTIONS),
    formatting: unionFormattingSchema.optional(),
    showAs: unionShowAsSchema.optional(),
});
export const rollupCelValueSchema = z.any();
