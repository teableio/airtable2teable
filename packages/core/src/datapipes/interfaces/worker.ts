import { OutputAndStatus } from './output-and-status';

export interface IWorker<InputType, OutputType> {
  run: (input: InputType) => Promise<OutputAndStatus<OutputType>>;

  cancel: () => void;
}
