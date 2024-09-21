import { Colors } from '@/types';
import { z } from 'zod';

export const selectFieldChoiceSchema = z.object({
  id: z.string(),
  name: z.string().min(1),
  color: z.nativeEnum(Colors),
});
export const selectFieldOptionsSchema = z.object({
  choices: z.array(selectFieldChoiceSchema),
});

export const selectFieldChoiceRoSchema = selectFieldChoiceSchema.partial({
  id: true,
  color: true,
});

export const selectFieldOptionsRoSchema = z.object({
  choices: z.array(selectFieldChoiceRoSchema),
});

export const multipleSelectCelValueSchema = z.array(z.string());

export type IMultipleSelectCellValue = z.infer<
  typeof multipleSelectCelValueSchema
>;
