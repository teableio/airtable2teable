import { AirtableFieldTypeEnum } from 'types';
import { z } from 'zod';

import { unionFieldOptionsVoSchema } from './index';

export const formulaFieldOptionsSchema = z.object({
  formula: z.string(),
  isValid: z.boolean(),
  referencedFieldIds: z.string().array().nullable(),
  result: z
    .object({
      type: z.nativeEnum(AirtableFieldTypeEnum),
      options: z.lazy(() => unionFieldOptionsVoSchema),
    })
    .nullable(),
});

export type IFormulaFieldOptionsVo = z.infer<typeof formulaFieldOptionsSchema>;

export const formulaCellValueSchema = z.union([
  z.string(),
  z.number(),
  z.union([z.string(), z.number()]).array(),
]);

export type IFormulaCellValueVo = z.infer<typeof formulaCellValueSchema>;
