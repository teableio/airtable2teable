import { z } from 'zod';
export const linkFieldOptionsSchema = z.object({
    isReversed: z.boolean(),
    linkedTableId: z.string(),
    prefersSingleRecordLink: z.boolean(),
    inverseLinkFieldId: z.string().optional(),
    viewIdForRecordSelection: z.string().optional(),
});
export const LinkCellValueSchema = z.string().array();
