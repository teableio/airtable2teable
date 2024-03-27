import { z } from 'zod';

import {
  lookupOptionsRoSchema,
  unionFieldOptionsRoSchema,
} from './field.option.schema';
import { fieldVoSchema } from './field.vo.schema';

const baseFieldRoSchema = fieldVoSchema
  .partial()
  .pick({
    type: true,
    name: true,
    dbFieldName: true,
    isLookup: true,
    description: true,
  })
  .required({
    type: true,
  })
  .merge(
    z.object({
      name: fieldVoSchema.shape.name.min(1).optional(),
      description: fieldVoSchema.shape.description.nullable(),
      lookupOptions: lookupOptionsRoSchema.optional(),
      options: unionFieldOptionsRoSchema.optional(),
    }),
  );

export const createFieldRoSchema = baseFieldRoSchema;
// .merge(
//   z.object({
//     id: z.string().startsWith(IdPrefix.Field),
//   }),
// );

export type ICreateFieldRo = z.infer<typeof createFieldRoSchema>;
