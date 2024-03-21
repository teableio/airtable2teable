import { AirtableCellTypeEnum } from 'types';

import { AirtableFieldVo } from './airtable.field.vo';

export class AirtableRollupField extends AirtableFieldVo {
  get cellType(): AirtableCellTypeEnum {
    return AirtableCellTypeEnum.STRING;
  }

  getApiCellValue(value: string | number) {
    return value;
  }
}
