import { z } from 'zod';

export const collaboratorCellValueSchema = z.object({
  id: z.string(),
  email: z.string().optional(),
  name: z.string().optional(),
  profilePicUrl: z.string().optional(),
});

export type ICollaboratorCellValueVo = z.infer<
  typeof collaboratorCellValueSchema
>;
