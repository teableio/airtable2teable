import { z } from 'zod';
import { lookupOptionsRoSchema, unionFieldOptionsRoSchema, } from './field.option.schema';
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
    .merge(z.object({
    name: fieldVoSchema.shape.name.min(1).optional(),
    description: fieldVoSchema.shape.description.nullable(),
    lookupOptions: lookupOptionsRoSchema.optional(),
    options: unionFieldOptionsRoSchema.optional(),
}));
export const createFieldRoSchema = baseFieldRoSchema;
export const updateFieldRoSchema = z.object({
    name: baseFieldRoSchema.shape.name,
    description: baseFieldRoSchema.shape.description,
    dbFieldName: baseFieldRoSchema.shape.dbFieldName,
});
export const convertFieldRoSchema = baseFieldRoSchema.optional();
