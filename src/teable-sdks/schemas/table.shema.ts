import { IdPrefix } from 'types';
import { z } from 'zod';

import { createFieldRoSchema, fieldVoSchema } from './fields';
import {
  createRecordsRoSchema,
  fieldKeyTypeRoSchema,
  recordSchema,
} from './record.schema';
import { viewRoSchema, viewVoSchema } from './views';

export const tableFullVoSchema = z.object({
  id: z.string().startsWith(IdPrefix.Table),
  name: z.string(),
  dbTableName: z.string(),
  description: z.string().optional(),
  icon: z.string().emoji().optional(),
  fields: fieldVoSchema.array(),
  views: viewVoSchema.array(),
  records: recordSchema.array(),
  order: z.number(),
  lastModifiedTime: z.string(),
  defaultViewId: z.string().startsWith(IdPrefix.View).optional(),
});

export type ITableTableVo = z.infer<typeof tableFullVoSchema>;

export const tableRoSchema = tableFullVoSchema
  .omit({
    id: true,
    lastModifiedTime: true,
    defaultViewId: true,
  })
  .partial({
    name: true,
    dbTableName: true,
    order: true,
  })
  .merge(
    z.object({
      name: tableFullVoSchema.shape.name.min(1).optional(),
      description: tableFullVoSchema.shape.description.nullable(),
      icon: tableFullVoSchema.shape.icon.nullable(),
      views: viewRoSchema.array().optional(),
      fieldKeyType: fieldKeyTypeRoSchema,
      fields: createFieldRoSchema.array().optional(),
      records: createRecordsRoSchema.shape.records.optional(),
      order: z.number().optional(),
    }),
  );

export type ICreateTableRo = z.infer<typeof tableRoSchema>;
