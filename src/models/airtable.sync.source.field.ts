import { AirtableCellTypeEnum } from 'types';

import { AirtableFieldVo } from './airtable.field.vo';

export class AirtableSyncSourceField extends AirtableFieldVo {
  get cellType(): AirtableCellTypeEnum {
    return AirtableCellTypeEnum.STRING;
  }
  getApiCellValue(value: string) {
    return value;
  }
}
