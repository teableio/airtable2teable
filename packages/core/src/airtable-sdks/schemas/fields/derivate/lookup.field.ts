import { z } from 'zod';

import { AirtableFieldTypeEnum } from '@/types';

import { unionFieldOptionsVoSchema } from './index';

export const lookupFieldOptionsSchema = z.object({
  fieldIdInLinkedTable: z.string().nullable(),
  isValid: z.boolean(),
  recordLinkFieldId: z.string().nullable(),
  result: z
    .object({
      type: z.nativeEnum(AirtableFieldTypeEnum),
      options: z.lazy(() => unionFieldOptionsVoSchema),
    })
    .nullable(),
});

export type ILookupFieldOptionsVo = z.infer<typeof lookupFieldOptionsSchema>;

export const lookupCellValueSchema = z
  .union([z.number(), z.string(), z.boolean(), z.any()])
  .array();

export type ILookupCellValueVo = z.infer<typeof lookupCellValueSchema>;
