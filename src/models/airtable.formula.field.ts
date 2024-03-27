import {
  AirtableCellTypeEnum,
  AirtableFieldTypeEnum,
  TeableFieldType,
} from 'types';
import { z } from 'zod';

import { IFormulaFieldOptionsVo } from '../airtable-sdks';
import { ICreateFieldRo } from '../teable-sdks';
import { AirtableFieldVo } from './airtable.field.vo';

export const formulaCellValueSchema = z.union([
  z.string(),
  z.number(),
  z.union([z.string(), z.number()]).array(),
]);

export type IFormulaCellValueVo = z.infer<typeof formulaCellValueSchema>;

export class AirtableFormulaField extends AirtableFieldVo {
  options: IFormulaFieldOptionsVo;

  get cellType(): AirtableCellTypeEnum {
    return AirtableCellTypeEnum.ANY;
  }

  getApiCellValue(value: IFormulaCellValueVo) {
    return value;
  }

  transformTeableCreateFieldRo(): ICreateFieldRo {
    return {
      type: TeableFieldType.Formula,
      name: this.name,
      description: this.description,
      isLookup: this.options.result?.type === AirtableFieldTypeEnum.Lookup,
      options: {
        expression: this.options.formula,
      },
    };
  }
}
