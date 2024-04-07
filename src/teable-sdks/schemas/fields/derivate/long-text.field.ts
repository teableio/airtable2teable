import { z } from 'zod';

export const longTextFieldOptionsSchema = z.object({}).strict();

export const longTextCelValueSchema = z.string();

export type ILongTextCellValue = z.infer<typeof longTextCelValueSchema>;
