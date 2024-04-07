import { z } from 'zod';

import { numberShowAsSchema } from './number';
import { singleLineTextShowAsSchema } from './text';

export * from './number';
export * from './text';

export const unionShowAsSchema = z.union([
  singleLineTextShowAsSchema.strict(),
  numberShowAsSchema,
]);
