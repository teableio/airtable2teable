import { AirtableCellTypeEnum, TeableFieldType } from 'types';
import { z } from 'zod';

import { ICreateFieldRo } from '../teable-sdks';
import { AirtableFieldVo } from './airtable.field.vo';

export const buttonCellValueSchema = z.object({
  label: z.string(),
  url: z.string().nullable(),
});

export type IButtonCellValueVo = z.infer<typeof buttonCellValueSchema>;

export class AirtableButtonField extends AirtableFieldVo {
  options: undefined;

  get cellType(): AirtableCellTypeEnum {
    return AirtableCellTypeEnum.OBJECT;
  }

  getApiCellValue(value: IButtonCellValueVo) {
    return value.label;
  }

  transformTeableCreateFieldRo(): ICreateFieldRo {
    return {
      type: TeableFieldType.SingleLineText,
      name: this.name,
      description: this.description,
      isLookup: false,
      options: {},
    };
  }
}
