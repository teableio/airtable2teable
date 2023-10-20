import { ISdkConfig } from './index';
import { IViewVo } from './schemas';

export class View {
  constructor(
    private config: ISdkConfig,
    private info: IViewVo,
  ) {}
}
