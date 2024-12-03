import {
  IDestination,
  IMessageTracker,
  ISource,
  ISyncWorker,
  OutputAndStatus,
} from './interfaces';
import {
  StandardSyncInput,
  StandardSyncOutput,
  StandardTapConfig,
  StandardTargetConfig,
} from './models';
import { JobStatus } from './protocols';

export class DefaultSyncWorker<T> implements ISyncWorker {
  private cancelled = false;

  constructor(
    private readonly source: ISource<T>,
    private readonly destination: IDestination<T>,
    private readonly messageTracker: IMessageTracker<T>,
  ) {}

  async run(
    input: StandardSyncInput,
  ): Promise<OutputAndStatus<StandardSyncOutput>> {
    const startTime = new Date();

    const tapConfig: StandardTapConfig = {
      sourceConnectionConfiguration:
        input.sourceConnectionImplementation.configuration,
      catalog: input.catalog,
    };

    const targetConfig: StandardTargetConfig = {
      destinationConnectionConfiguration:
        input.destinationConnectionImplementation.configuration,
      catalog: input.catalog,
    };

    try {
      await this.source.start(tapConfig);
      await this.destination.start(targetConfig);

      while (!this.source.isFinished() && !this.cancelled) {
        const maybeMessage = await this.source.attemptRead();
        if (maybeMessage) {
          await this.messageTracker.accept(maybeMessage);
          await this.destination.accept(maybeMessage);
        }
      }

      await this.destination.notifyEndOfStream();
    } catch (error) {
      return {
        status: JobStatus.FAILED,
        output: null,
      };
    }

    return {
      status: this.cancelled ? JobStatus.FAILED : JobStatus.SUCCESS,
      output: {
        standardSyncSummary: {
          recordsSynced: this.messageTracker.getRecordCount(),
          status: this.cancelled ? JobStatus.FAILED : JobStatus.SUCCESS,
          startTime,
          endTime: new Date(),
        },
        state: {
          state: this.messageTracker.getOutputState() ?? {},
        },
      },
    };
  }

  cancel() {
    this.cancelled = true;
  }
}
