import {
  AirtableCellTypeEnum,
  AirtableField,
  IAirtableFormulaField,
} from 'types';
import { z } from 'zod';

export const formulaCellValueSchema = z.union([
  z.string(),
  z.number(),
  z.union([z.string(), z.number()]).array(),
]);

export type IFormulaCellValueVo = z.infer<typeof formulaCellValueSchema>;

export class AirtableFormulaField extends AirtableField {
  constructor(field: IAirtableFormulaField) {
    super(field);
  }

  get cellType(): AirtableCellTypeEnum {
    return AirtableCellTypeEnum.ANY;
  }

  getApiCellValue(value: IFormulaCellValueVo) {
    return value;
  }
}
