import { z } from 'zod';

export const attachmentFieldOptionsSchema = z.object({
  isReversed: z.boolean(),
});

export type IAttachmentFieldOptionsVo = z.infer<
  typeof attachmentFieldOptionsSchema
>;
