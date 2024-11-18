import { JobStatus } from "../domians";

export interface StandardSyncSummary {
  jobId: string;
  recordsSynced: number;
  status: JobStatus;
  startTime: Date;
  endTime: Date;
}

export interface State {
  connectionId: string;
  state: Record<string, any>;
}

export interface StandardSyncOutput {
  standardSyncSummary: StandardSyncSummary;
  state: State;
}
