import { AirtableCellTypeEnum } from 'types';
import { z } from 'zod';

import { AirtableFieldVo } from './airtable.field.vo';

export const formulaCellValueSchema = z.union([
  z.string(),
  z.number(),
  z.union([z.string(), z.number()]).array(),
]);

export type IFormulaCellValueVo = z.infer<typeof formulaCellValueSchema>;

export class AirtableFormulaField extends AirtableFieldVo {
  get cellType(): AirtableCellTypeEnum {
    return AirtableCellTypeEnum.ANY;
  }

  getApiCellValue(value: IFormulaCellValueVo) {
    return value;
  }
}
