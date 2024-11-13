import { AxiosInstance } from 'axios';

import { IViewVo } from './schemas';

export class View {
  constructor(
    private client: AxiosInstance,
    private info: IViewVo,
  ) {}
}
