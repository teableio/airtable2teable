import { z } from 'zod';

export const buttonCellValueSchema = z.object({
  label: z.string(),
  url: z.string().nullable(),
});

export type IButtonCellValueVo = z.infer<typeof buttonCellValueSchema>;
