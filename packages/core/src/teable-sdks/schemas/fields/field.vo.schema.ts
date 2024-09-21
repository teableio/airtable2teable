import {
  IdPrefix,
  TeableCellValueType,
  TeableDbFieldType,
  TeableFieldType,
} from '@/types';
import { z } from 'zod';

import {
  attachmentCellValueSchema,
  autoNumberCellValueSchema,
  booleanCellValueSchema,
  dataFieldCellValueSchema,
  formulaFieldCellValueSchema,
  linkCellValueSchema,
  longTextCelValueSchema,
  multipleSelectCelValueSchema,
  numberCellValueSchema,
  rollupCelValueSchema,
  userCellValueSchema,
} from './derivate';
import {
  lookupOptionsVoSchema,
  unionFieldOptionsVoSchema,
} from './field.option.schema';

export const fieldVoSchema = z.object({
  id: z.string().startsWith(IdPrefix.Field),

  name: z.string(),

  type: z.nativeEnum(TeableFieldType),

  description: z.string().optional(),

  options: unionFieldOptionsVoSchema,

  isLookup: z.boolean().optional(),

  lookupOptions: lookupOptionsVoSchema.optional(),

  notNull: z.boolean().optional(),

  unique: z.boolean().optional(),

  isPrimary: z.boolean().optional(),

  isComputed: z.boolean().optional(),

  isPending: z.boolean().optional(),

  hasError: z.boolean().optional(),

  cellValueType: z.nativeEnum(TeableCellValueType),

  isMultipleCellValue: z.boolean().optional(),

  dbFieldType: z.nativeEnum(TeableDbFieldType),

  dbFieldName: z
    .string()
    .min(1, { message: 'name cannot be empty' })
    .regex(/^[a-z]\w{0,62}$/i, {
      message: 'Invalid name format',
    }),
});

export type IFieldVo = z.infer<typeof fieldVoSchema>;

export const unionFieldCellValueSchema = z.union([
  attachmentCellValueSchema,
  autoNumberCellValueSchema,
  booleanCellValueSchema,
  dataFieldCellValueSchema,
  formulaFieldCellValueSchema,
  linkCellValueSchema,
  longTextCelValueSchema,
  numberCellValueSchema,
  userCellValueSchema,
  multipleSelectCelValueSchema,
  rollupCelValueSchema,
]);

export type IFieldCellValueVo = z.infer<typeof unionFieldCellValueSchema>;
