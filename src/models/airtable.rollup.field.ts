import { AirtableCellTypeEnum, TeableFieldType } from 'types';

import { IRollupFieldOptionsVo } from '../airtable-sdks';
import { ICreateFieldRo } from '../teable-sdks';
import { AirtableFieldVo } from './airtable.field.vo';

export class AirtableRollupField extends AirtableFieldVo {
  options: IRollupFieldOptionsVo;

  get cellType(): AirtableCellTypeEnum {
    return AirtableCellTypeEnum.STRING;
  }

  getApiCellValue(value: string | number) {
    return value;
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
