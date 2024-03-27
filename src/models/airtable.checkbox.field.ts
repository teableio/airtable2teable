import { AirtableCellTypeEnum, TeableFieldType } from 'types';
import { z } from 'zod';

import { ICheckFieldOptionsVo } from '../airtable-sdks';
import { ICreateFieldRo } from '../teable-sdks';
import { AirtableFieldVo } from './airtable.field.vo';

export const checkboxCellValueSchema = z.boolean().nullable();

export type ICheckboxCellValueVo = z.infer<typeof checkboxCellValueSchema>;

export class AirtableCheckboxField extends AirtableFieldVo {
  options: ICheckFieldOptionsVo;

  get cellType(): AirtableCellTypeEnum {
    return AirtableCellTypeEnum.TRUE;
  }
  getApiCellValue(value: ICheckboxCellValueVo) {
    return value;
  }

  transformTeableCreateFieldRo(): ICreateFieldRo {
    return {
      type: TeableFieldType.Checkbox,
      name: this.name,
      description: this.description,
      isLookup: false,
      options: {},
    };
  }
}
