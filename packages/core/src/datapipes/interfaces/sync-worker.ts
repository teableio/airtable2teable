import { StandardSyncInput, StandardSyncOutput } from '../models';
import { IWorker } from './worker';

export interface ISyncWorker
  extends IWorker<StandardSyncInput, StandardSyncOutput> {}
