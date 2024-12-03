import { z } from 'zod';

const sourceConnectionImplementationSchema = z.object({
  name: z.string(),
  configuration: z.record(z.string(), z.unknown()),
});

export type SourceConnectionImplementation = z.infer<
  typeof sourceConnectionImplementationSchema
>;

const destinationConnectionImplementationSchema = z.object({
  name: z.string(),
  configuration: z.record(z.string(), z.unknown()),
});

export type DestinationConnectionImplementation = z.infer<
  typeof destinationConnectionImplementationSchema
>;

const standardSyncInputSchema = z.object({
  sourceConnectionImplementation: sourceConnectionImplementationSchema,
  destinationConnectionImplementation:
    destinationConnectionImplementationSchema,
  catalog: z.record(z.string(), z.unknown()),
});

export type StandardSyncInput = z.infer<typeof standardSyncInputSchema>;
