import { AirtableIcon } from 'types';
import { z } from 'zod';

export const checkboxFieldOptionsSchema = z.object({
  color: z.string(),
  icon: z.nativeEnum(AirtableIcon),
});

export type ICheckFieldOptionsVo = z.infer<typeof checkboxFieldOptionsSchema>;

export const checkboxCellValueSchema = z.boolean().nullable();

export type ICheckboxCellValueVo = z.infer<typeof checkboxCellValueSchema>;
