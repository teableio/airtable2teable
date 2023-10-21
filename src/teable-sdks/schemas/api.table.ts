import { IdPrefix } from 'types';
import { z } from 'zod';

import {
  fieldKeyTypeRoSchema,
  fieldRoSchema,
  fieldVoSchema,
} from './api.field';
import { createRecordsRoSchema } from './api.record';
import { viewRoSchema, viewVoSchema } from './api.view';

export const tableFullVoSchema = z.object({
  id: z.string().startsWith(IdPrefix.Table),
  name: z.string(),
  dbTableName: z.string(),
  description: z.string().optional(),
  icon: z.string().emoji().optional(),
  order: z.number(),
  lastModifiedTime: z.string(),
  defaultViewId: z.string().startsWith(IdPrefix.View).optional(),
  fields: fieldVoSchema.array(),
  views: viewVoSchema.array(),
});

export type ITableFullVo = z.infer<typeof tableFullVoSchema>;

export const tableRoSchema = tableFullVoSchema
  .omit({
    // todo: mark
    id: true,
    dbTableName: true,
    lastModifiedTime: true,
    defaultViewId: true,
  })
  .partial({
    name: true,
    order: true,
  })
  .merge(
    z.object({
      views: viewRoSchema.array().optional(),
      fieldKeyType: fieldKeyTypeRoSchema,
      fields: fieldRoSchema.array().optional(),
      records: createRecordsRoSchema.shape.records.optional(),
      order: z.number().optional(),
    }),
  );

export type ICreateTableRo = z.infer<typeof tableRoSchema>;

export const tableVoSchema = tableFullVoSchema.partial({
  fields: true,
  views: true,
  records: true,
});
