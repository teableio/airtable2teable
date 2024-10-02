import { z } from 'zod';

import { IdPrefix } from '@/types';

export const userFieldOptionsSchema = z.object({
  isMultiple: z.boolean(),
  shouldNotify: z.boolean(),
});

export const userCellValueSchema = z.object({
  id: z.string().startsWith(IdPrefix.User),
  title: z.string().optional(),
  avatarUrl: z.string().optional().nullable(),
});

export type IUserCellValue = z.infer<typeof userCellValueSchema>;
