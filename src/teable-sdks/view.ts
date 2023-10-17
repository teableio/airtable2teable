import { ISdkConfig } from './index';
import { IViewVo } from './types';

export class View {
  constructor(
    private config: ISdkConfig,
    private info: IViewVo,
  ) {}
}
