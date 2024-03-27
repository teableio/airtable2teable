import { z } from 'zod';

import { singleLineTextShowAsSchema } from '../show-as';

export const singlelineTextFieldOptionsSchema = z.object({
  showAs: singleLineTextShowAsSchema.optional(),
});
