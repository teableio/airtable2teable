import { A_COLOR_LIST } from 'types';
import { z } from 'zod';

export const selectFieldOptionsSchema = z.object({
  choices: z
    .object({
      id: z.string(),
      color: z.enum(A_COLOR_LIST).optional(),
      name: z.string(),
    })
    .array(),
});

export type ISelectFieldOptionsVo = z.infer<typeof selectFieldOptionsSchema>;
