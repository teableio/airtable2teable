import { JobStatus } from '../protocols';

export interface OutputAndStatus<OutputType> {
  output: OutputType | null;
  status: JobStatus;
}
