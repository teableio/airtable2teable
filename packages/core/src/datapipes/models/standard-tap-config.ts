import { z } from 'zod';

const standardTapConfigSchema = z.object({
  sourceConnectionConfiguration: z.record(z.string(), z.unknown()),
  catalog: z.record(z.string(), z.unknown()),
});

export type StandardTapConfig = z.infer<typeof standardTapConfigSchema>;
