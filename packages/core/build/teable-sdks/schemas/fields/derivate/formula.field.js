import { z } from 'zod';
import { unionFormattingSchema } from '../formatting';
import { unionShowAsSchema } from '../show-as';
export const formulaFieldOptionsSchema = z.object({
    expression: z.string(),
    formatting: unionFormattingSchema.optional(),
    showAs: unionShowAsSchema.optional(),
});
export const formulaFieldCellValueSchema = z.any();
