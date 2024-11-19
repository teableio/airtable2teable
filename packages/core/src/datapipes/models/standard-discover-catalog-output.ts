import { z } from 'zod';

const standardDiscoverCatalogOutputSchema = z.object({
  catalog: z.record(z.string(), z.unknown()),
});

export type StandardDiscoverCatalogOutput = z.infer<
  typeof standardDiscoverCatalogOutputSchema
>;
