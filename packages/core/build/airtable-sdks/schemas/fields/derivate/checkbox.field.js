import { AirtableIcon } from '@/types';
import { z } from 'zod';
export const checkboxFieldOptionsSchema = z.object({
    color: z.string(),
    icon: z.nativeEnum(AirtableIcon),
});
export const checkboxCellValueSchema = z.boolean().nullable();
