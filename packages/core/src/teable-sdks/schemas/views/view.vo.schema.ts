import {
  IdPrefix,
  StatisticsFunc,
  TeableViewTypeEnum,
  TIME_ZONE_LIST,
} from '@/types';
import { z } from 'zod';

import { dataFieldCellValueSchema } from '../fields';
import {
  formViewOptionSchema,
  gridViewOptionSchema,
  kanbanViewOptionSchema,
} from './derivate';
import {
  conjunctionSchema,
  operators,
  subOperators,
  symbols,
} from './operator.schema';

export const viewOptionsSchema = z.union([
  gridViewOptionSchema,
  kanbanViewOptionSchema,
  formViewOptionSchema,
]);

export enum SortFunc {
  Asc = 'asc',
  Desc = 'desc',
}

export const orderSchema = z.nativeEnum(SortFunc);

export const sortItemSchema = z.object({
  fieldId: z.string().startsWith(IdPrefix.Field),
  order: orderSchema,
});

export const sortSchema = z
  .object({
    sortObjs: sortItemSchema.array(),
    manualSort: z.boolean().optional(),
  })
  .nullable();

export const timeZoneStringSchema = z.enum(TIME_ZONE_LIST);

export const dateFilterSchema = z.object({
  mode: subOperators,
  numberOfDays: z.coerce.number().int().nonnegative().optional(),
  exactDate: dataFieldCellValueSchema.optional(),
  timeZone: timeZoneStringSchema,
});

export const literalValueSchema = z.union([
  z.string(),
  z.number(),
  z.boolean(),
]);

export const literalValueListSchema = literalValueSchema.array().nonempty();

const filterValueSchema = z
  .union([literalValueSchema, literalValueListSchema, dateFilterSchema])
  .nullable();

const filterOperatorSchema = z.object({
  isSymbol: z.literal(false).optional(),
  fieldId: z.string(),
  value: filterValueSchema,
  operator: operators,
});

const filterSymbolOperatorSchema = z.object({
  isSymbol: z.literal(true),
  fieldId: z.string(),
  value: filterValueSchema,
  operator: symbols,
});

export const filterItemSchema = z.union([
  filterOperatorSchema,
  filterSymbolOperatorSchema,
]);

export const baseFilterSetSchema = z.object({
  conjunction: conjunctionSchema,
});

export const nestedFilterItemSchema = baseFilterSetSchema.extend({
  filterSet: z.lazy(
    () => z.array(z.union([filterItemSchema, nestedFilterItemSchema]))
  ),
});

export const filterSchema = z
  .object({
    filterSet: z.union([filterItemSchema, nestedFilterItemSchema]).array(),
    conjunction: conjunctionSchema,
  })
  .nullable();

export const groupItemSchema = z.object({
  fieldId: z.string().startsWith(IdPrefix.Field),
  order: orderSchema,
});

export const groupSchema = groupItemSchema.array().nullable();

export const sharePasswordSchema = z.string().min(3);

export const shareViewMetaSchema = z.object({
  allowCopy: z.boolean().optional(),
  includeHiddenField: z.boolean().optional(),
  password: sharePasswordSchema.optional(),
});

export const columnSchemaBase = z.object({
  order: z.number(),
});

export const gridColumnSchema = columnSchemaBase.merge(
  z.object({
    width: z.number().optional(),
    hidden: z.boolean().optional(),
    statisticFunc: z.nativeEnum(StatisticsFunc).nullable().optional(),
  }),
);

export const kanbanColumnSchema = columnSchemaBase.merge(
  z.object({
    hidden: z.boolean().optional(),
  }),
);

export const formColumnSchema = columnSchemaBase.merge(
  z.object({
    visible: z.boolean().optional(),
    required: z.boolean().optional(),
  }),
);

export const columnSchema = z.union([
  gridColumnSchema,
  kanbanColumnSchema,
  formColumnSchema,
]);

export const columnMetaSchema = z.record(
  z.string().startsWith(IdPrefix.Field),
  columnSchema,
);

export const viewVoSchema = z.object({
  id: z.string().startsWith(IdPrefix.View),
  name: z.string(),
  type: z.nativeEnum(TeableViewTypeEnum),
  description: z.string().optional(),
  order: z.number(),
  options: viewOptionsSchema.optional(),
  sort: sortSchema.optional(),
  filter: filterSchema.optional(),
  group: groupSchema.optional(),
  shareId: z.string().optional(),
  enableShare: z.boolean().optional(),
  shareMeta: shareViewMetaSchema.optional(),
  createdBy: z.string(),
  lastModifiedBy: z.string(),
  createdTime: z.string(),
  lastModifiedTime: z.string(),
  columnMeta: columnMetaSchema,
});

export type IViewVo = z.infer<typeof viewVoSchema>;
