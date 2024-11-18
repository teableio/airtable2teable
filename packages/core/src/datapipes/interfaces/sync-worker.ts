import { OutputAndStatus } from "./output-and-status";
import { StandardSyncInput } from "./standard-sync-input";
import { StandardSyncOutput } from "./standard-sync-output";
import { Worker } from './worker'

export interface SyncWorker extends Worker<StandardSyncInput, StandardSyncOutput> { }
