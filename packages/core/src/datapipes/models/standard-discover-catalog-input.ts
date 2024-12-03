import { z } from 'zod';

const standardDiscoverCatalogInputSchema = z.object({
  connectionConfiguration: z.record(z.string(), z.unknown()),
});

export type StandardDiscoverCatalogInput = z.infer<
  typeof standardDiscoverCatalogInputSchema
>;
