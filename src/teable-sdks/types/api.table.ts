import { IdPrefix } from 'types';
import { z } from 'zod';

export const tableFullVoSchema = z.object({
  id: z.string().startsWith(IdPrefix.Table),
  name: z.string(),
  dbTableName: z.string(),
  description: z.string().optional(),
  icon: z.string().emoji().optional(),
  order: z.number(),
  lastModifiedTime: z.string(),
  defaultViewId: z.string().startsWith(IdPrefix.View).optional(),
});

export type ITableFullVo = z.infer<typeof tableFullVoSchema>;

export const tableRoSchema = tableFullVoSchema
  .omit({
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
      order: z.number().optional(),
    }),
  );

export type ICreateTableRo = z.infer<typeof tableRoSchema>;
