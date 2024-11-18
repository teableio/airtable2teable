import { OutputAndStatus } from "./output-and-status";

export interface Worker<InputType, OutputType> {

  run: (input: InputType) => Promise<OutputAndStatus<OutputType>>;

  cancel: () => void;

}
