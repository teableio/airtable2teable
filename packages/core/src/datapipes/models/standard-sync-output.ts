import { z } from 'zod';

import { JobStatus } from '../protocols';

const standardSyncSummarySchema = z.object({
  recordsSynced: z.number(),
  status: z.nativeEnum(JobStatus),
  startTime: z.date(),
  endTime: z.date(),
});

export type StandardSyncSummary = z.infer<typeof standardSyncSummarySchema>;

const stateSchema = z.object({
  state: z.record(z.string(), z.unknown()),
});

export type State = z.infer<typeof stateSchema>;

const standardSyncOutputSchema = z.object({
  standardSyncSummary: standardSyncSummarySchema,
  state: stateSchema,
});

export type StandardSyncOutput = z.infer<typeof standardSyncOutputSchema>;
