import {
  AirtableCellTypeEnum,
  AirtableField,
  IAirtableButtonField,
  TeableFieldType,
} from 'types';
import { z } from 'zod';

import { IFieldRo } from '../teable-sdks';

export const buttonCellValueSchema = z.object({
  label: z.string(),
  url: z.string().nullable(),
});

export type IButtonCellValueVo = z.infer<typeof buttonCellValueSchema>;

export class AirtableButtonField extends AirtableField {
  constructor(field: IAirtableButtonField) {
    super(field);
  }

  get cellType(): AirtableCellTypeEnum {
    return AirtableCellTypeEnum.OBJECT;
  }

  getApiCellValue(value: IButtonCellValueVo) {
    return value.label;
  }

  transformTeableFieldCreateRo(): IFieldRo {
    return {
      type: TeableFieldType.SingleLineText,
      name: this.name,
      description: this.description,
      isLookup: false,
      options: {},
    };
  }
}
