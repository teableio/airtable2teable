import { StandardTapConfig } from '../models/standard-tap-config';

export interface ISource<T> {
  start(input: StandardTapConfig): Promise<void>;

  isFinished(): Promise<boolean>;

  attemptRead(): Promise<T | null>;
}
