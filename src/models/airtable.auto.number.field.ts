import { AirtableCellTypeEnum, TeableFieldType } from 'types';
import { z } from 'zod';

import { ICreateFieldRo } from '../teable-sdks';
import { AirtableFieldVo } from './airtable.field.vo';

export const autoNumberCellValueSchema = z.number();

export type IAutoNumberCellValueVo = z.infer<typeof autoNumberCellValueSchema>;

export class AirtableAutoNumberField extends AirtableFieldVo {
  options: undefined;

  get cellType(): AirtableCellTypeEnum {
    return AirtableCellTypeEnum.NUMBER;
  }

  getApiCellValue(value: IAutoNumberCellValueVo) {
    return value;
  }

  transformTeableCreateFieldRo(): ICreateFieldRo {
    return {
      type: TeableFieldType.AutoNumber,
      name: this.name,
      description: this.description,
      isLookup: false,
      options: {
        expression: 'AUTO_NUMBER()',
      },
    };
  }
}
