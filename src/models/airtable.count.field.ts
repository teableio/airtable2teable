import {
  AirtableCellTypeEnum,
  AirtableField,
  IAirtableCountField,
} from 'types';
import { z } from 'zod';

export const countCellValueSchema = z.number();

export type ICountCellValueVo = z.infer<typeof countCellValueSchema>;
export class AirtableCountField extends AirtableField {
  constructor(field: IAirtableCountField) {
    super(field);
  }

  get cellType(): AirtableCellTypeEnum {
    return AirtableCellTypeEnum.NUMBER;
  }

  getApiCellValue(value: ICountCellValueVo) {
    return value;
  }
}
