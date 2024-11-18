import { JobStatus } from "../domians";

export interface OutputAndStatus<OutputType> {
  output: OutputType;
  status: JobStatus;
}
