import { AirtableFieldTypeEnum } from '@/types';

import {
  IAirtableFieldVo,
  IFieldCellVo,
  IFieldOptionsVo,
} from '../airtable-sdks';
import { ICreateFieldRo, IFieldCellValueVo } from '../teable-sdks';

export abstract class AirtableFieldVo implements IAirtableFieldVo {
  tableId!: string;

  id!: string;

  name!: string;

  type!: AirtableFieldTypeEnum;

  description?: string;

  options?: IFieldOptionsVo;

  constructor(vo: IAirtableFieldVo & { tableId: string }) {
    this.tableId = vo.tableId;
    this.id = vo.id;
    this.name = vo.name;
    this.type = vo.type;
    this.description = vo.description;
    this.options = vo.options;
  }

  abstract transformTeableCreateRecordRo(
    value: IFieldCellVo,
    ...args: unknown[]
  ): IFieldCellValueVo;

  abstract transformTeableCreateFieldRo(...args: unknown[]): ICreateFieldRo;
}
