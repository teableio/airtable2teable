import { AirtableCellTypeEnum } from 'types';
import { z } from 'zod';

import { AirtableFieldVo } from './airtable.field.vo';

export const countCellValueSchema = z.number();

export type ICountCellValueVo = z.infer<typeof countCellValueSchema>;
export class AirtableCountField extends AirtableFieldVo {
  get cellType(): AirtableCellTypeEnum {
    return AirtableCellTypeEnum.NUMBER;
  }

  getApiCellValue(value: ICountCellValueVo) {
    return value;
  }
}
