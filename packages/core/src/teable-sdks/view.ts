import { IViewVo } from '@teable/core';
import { AxiosInstance } from 'axios';

export class View {
  constructor(
    private client: AxiosInstance,
    private info: IViewVo,
  ) {}
}
