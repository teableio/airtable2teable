import { AirtableCellTypeEnum, TeableFieldType } from 'types';
import { z } from 'zod';

import { ICreateFieldRo } from '../teable-sdks';
import { AirtableFieldVo } from './airtable.field.vo';

export const barcodeCellValueSchema = z.object({
  type: z.string().nullable().optional(),
  text: z.string().optional(),
});

export type IBarcodeCellValueVo = z.infer<typeof barcodeCellValueSchema>;

export class AirtableBarcodeField extends AirtableFieldVo {
  options: undefined;

  get cellType(): AirtableCellTypeEnum {
    return AirtableCellTypeEnum.OBJECT;
  }

  getApiCellValue(value: IBarcodeCellValueVo) {
    return value.text;
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
