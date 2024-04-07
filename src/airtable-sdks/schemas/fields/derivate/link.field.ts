import { z } from 'zod';

export const linkFieldOptionsSchema = z.object({
  isReversed: z.boolean(),
  linkedTableId: z.string(),
  prefersSingleRecordLink: z.boolean(),
  inverseLinkFieldId: z.string().optional(),
  viewIdForRecordSelection: z.string().optional(),
});

export type ILinkFieldOptionsVo = z.infer<typeof linkFieldOptionsSchema>;

export const LinkCellValueSchema = z.string().array();

export type ILinkCellValueVo = z.infer<typeof LinkCellValueSchema>;
