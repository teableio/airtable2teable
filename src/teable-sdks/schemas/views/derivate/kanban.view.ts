import { z } from 'zod';

export type IKanbanViewOptions = z.infer<typeof kanbanViewOptionSchema>;

export const kanbanViewOptionSchema = z
  .object({
    groupingFieldId: z.string(),
  })
  .strict();
