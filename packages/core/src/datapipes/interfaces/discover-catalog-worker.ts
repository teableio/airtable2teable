import {
  StandardDiscoverCatalogInput,
  StandardDiscoverCatalogOutput,
} from '../models';
import { IWorker } from './worker';

export interface IDiscoverCatalogWorker
  extends IWorker<
    StandardDiscoverCatalogInput,
    StandardDiscoverCatalogOutput
  > {}
