import {
  IDiscoverCatalogWorker,
  IIntegrationLauncher,
  OutputAndStatus,
} from './interfaces';
import {
  StandardDiscoverCatalogInput,
  StandardDiscoverCatalogOutput,
} from './models';
import { JobStatus } from './protocols';

export class DefaultDiscoverCatalogWorker implements IDiscoverCatalogWorker {
  constructor(private readonly integrationLauncher: IIntegrationLauncher) {}

  async run(
    discoverSchemaInput: StandardDiscoverCatalogInput,
  ): Promise<OutputAndStatus<StandardDiscoverCatalogOutput>> {
    return {
      output: { catalog: {} },
      status: JobStatus.SUCCESS,
    };
  }

  cancel(): void {
    throw new Error('Method not implemented.');
  }
}
