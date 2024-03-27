import { AirtableFieldTypeEnum } from 'types';

import { IAirtableFieldVo, IFieldOptionsVo } from '../airtable-sdks';
import { ICreateFieldRo } from '../teable-sdks';

export abstract class AirtableFieldVo implements IAirtableFieldVo {
  id!: string;

  name!: string;

  type!: AirtableFieldTypeEnum;

  description?: string;

  options?: IFieldOptionsVo;

  constructor(vo: IAirtableFieldVo) {
    this.id = vo.id;
    this.name = vo.name;
    this.type = vo.type;
    this.description = vo.description;
    this.options = vo.options;
  }

  abstract getApiCellValue(value: unknown, ...others: unknown[]): unknown;

  abstract transformTeableCreateFieldRo(...args: unknown[]): ICreateFieldRo;
}
