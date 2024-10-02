import { z } from 'zod';

export const TextCellValueSchema = z.string();

export type ITextCellValueVo = z.infer<typeof TextCellValueSchema>;
