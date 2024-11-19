import { z } from 'zod';

const standardTargetConfigSchema = z.object({
  destinationConnectionConfiguration: z.record(z.string(), z.unknown()),
  catalog: z.record(z.string(), z.unknown()),
});

export type StandardTargetConfig = z.infer<typeof standardTargetConfigSchema>;
