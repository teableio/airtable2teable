import { z } from 'zod';

export const attachmentFieldOptionsSchema = z.object({
  isReversed: z.boolean(),
});

export type IAttachmentFieldOptionsVo = z.infer<
  typeof attachmentFieldOptionsSchema
>;

export const attachmentCellValueSchema = z
  .object({
    id: z.string(),
    type: z.string(),
    filename: z.string(),
    height: z.number(),
    size: z.number(),
    url: z.string(),
    width: z.number(),
    thumbnails: z.object({
      full: z
        .object({
          url: z.string(),
          height: z.number(),
          width: z.number(),
        })
        .optional(),
      large: z
        .object({
          url: z.string(),
          height: z.number(),
          width: z.number(),
        })
        .optional(),
      small: z.object({
        url: z.string(),
        height: z.number(),
        width: z.number(),
      }),
    }),
  })
  .array();

export type IAttachmentCellValueVo = z.infer<typeof attachmentCellValueSchema>;
