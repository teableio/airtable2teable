import { z } from 'zod';

import { TeableCellValueType } from './teable.cell.value.type';
import { TeableDbFieldType } from './teable.db.field.type';
import { TeableFieldType } from './teable.field.type.enum';
import { IdPrefix } from './teable.id.prefix';
import { Relationship } from './teable.relationship';
import { StatisticsFunc } from './teable.statistics.func';

export const columnSchema = z.object({
  order: z.number(),
  width: z.number().optional(),
  hidden: z.boolean().optional(),
  statisticFunc: z.nativeEnum(StatisticsFunc).optional(),
});

export const columnMetaSchema = z.record(
  z.string().startsWith(IdPrefix.View),
  columnSchema,
);

export type IColumnMeta = z.infer<typeof columnMetaSchema>;

export const lookupOptionsVoSchema = z
  .object({
    relationship: z.nativeEnum(Relationship),
    foreignTableId: z.string(),
    lookupFieldId: z.string(),
    dbForeignKeyName: z.string(),
    linkFieldId: z.string(),
  })
  .strict();

export type ILookupOptionsVo = z.infer<typeof lookupOptionsVoSchema>;

export const fieldVoSchema = z.object({
  id: z.string().startsWith(IdPrefix.Field),

  name: z.string(),

  type: z.nativeEnum(TeableFieldType),

  description: z.string().optional(),

  options: z.object({}).strict(),

  isLookup: z.boolean().optional(),

  lookupOptions: lookupOptionsVoSchema.optional(),

  notNull: z.boolean().optional(),

  unique: z.boolean().optional(),

  isPrimary: z.boolean().optional(),

  columnMeta: columnMetaSchema,

  isComputed: z.boolean().optional(),

  hasError: z.boolean().optional(),

  cellValueType: z.nativeEnum(TeableCellValueType),

  isMultipleCellValue: z.boolean().optional(),

  dbFieldType: z.nativeEnum(TeableDbFieldType),

  dbFieldName: z.string(),
});

export type IFieldVo = z.infer<typeof fieldVoSchema>;
