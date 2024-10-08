import { z } from 'zod';

import { IdPrefix, TeableFieldKeyType } from '@/types';

export const fieldKeyTypeRoSchema = z
  .nativeEnum(TeableFieldKeyType, {
    errorMap: () => ({
      message: 'Error fieldKeyType, You should set it to "name" or "id"',
    }),
  })
  .default(TeableFieldKeyType.Name) // is not work with optional()...
  .transform((v) => v ?? TeableFieldKeyType.Name)
  .optional();

export const recordSchema = z.object({
  id: z.string().startsWith(IdPrefix.Record),
  name: z.string(),
  fields: z.record(z.unknown()),
  autoNumber: z.number(),
  createdTime: z.string().optional(),
  lastModifiedTime: z.string().optional(),
  createdBy: z.string().optional(),
  lastModifiedBy: z.string().optional(),
  recordOrder: z.record(z.number()),
});

export const recordsVoSchema = z.object({
  records: recordSchema.array(),
  offset: z.string().optional(),
});

export const createRecordsVoSchema = recordsVoSchema.omit({
  offset: true,
});

export type ICreateRecordsVo = z.infer<typeof createRecordsVoSchema>;

export const typecastSchema = z.boolean().optional();

export const createRecordsRoSchema = z.object({
  fieldKeyType: fieldKeyTypeRoSchema,
  typecast: typecastSchema,
  records: z
    .object({
      fields: recordSchema.shape.fields,
    })
    .array(),
});

export type ICreateRecordsRo = z.infer<typeof createRecordsRoSchema>;

export type IRecordsRo = z.infer<typeof createRecordsRoSchema.shape.records>;
