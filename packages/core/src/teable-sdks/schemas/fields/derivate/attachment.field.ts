import { z } from 'zod';

import { IdPrefix } from '@/types';

export const attachmentFieldOptionsSchema = z.object({}).strict();

export const attachmentItemSchema = z.object({
  id: z.string().startsWith(IdPrefix.Attachment),
  name: z.string(),
  path: z.string(),
  token: z.string(),
  size: z.number(),
  mimetype: z.string(),
  presignedUrl: z.string().optional(),
  width: z.number().optional(),
  height: z.number().optional(),
});

export const attachmentCellValueSchema = z.array(attachmentItemSchema);

export type IAttachmentCellValue = z.infer<typeof attachmentCellValueSchema>;
