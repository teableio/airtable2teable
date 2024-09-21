import { AirtableFieldTypeEnum } from '@/types';
import { z } from 'zod';
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
export const lookupCellValueSchema = z
    .union([z.number(), z.string(), z.boolean(), z.any()])
    .array();
