import { z } from 'zod';

export const checkboxFieldOptionsSchema = z.object({}).strict();

export const booleanCellValueSchema = z.boolean();

export type ICheckboxCellValue = z.infer<typeof booleanCellValueSchema>;
