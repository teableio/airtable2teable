import { StandardTargetConfig } from '../models/standard-target-config';

export interface IDestination<T> {
  start(input: StandardTargetConfig): Promise<void>;

  accept(data: T): Promise<void>;

  notifyEndOfStream(): void;
}
