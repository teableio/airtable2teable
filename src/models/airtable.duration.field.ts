import { AirtableCellTypeEnum } from 'types';

import { AirtableFieldVo } from './airtable.field.vo';

export class AirtableDurationField extends AirtableFieldVo {
  get cellType(): AirtableCellTypeEnum {
    return AirtableCellTypeEnum.NUMBER;
  }

  getApiCellValue(value: number): number {
    return value;
  }
}
