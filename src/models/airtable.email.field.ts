import { AirtableCellTypeEnum, TeableFieldType } from 'types';

import { ICreateFieldRo, SingleLineTextDisplayType } from '../teable-sdks';
import { AirtableFieldVo } from './airtable.field.vo';

export class AirtableEmailField extends AirtableFieldVo {
  get cellType(): AirtableCellTypeEnum {
    return AirtableCellTypeEnum.STRING;
  }

  getApiCellValue(value: string) {
    return value;
  }

  transformTeableCreateFieldRo(): ICreateFieldRo {
    return {
      type: TeableFieldType.SingleLineText,
      name: this.name,
      description: this.description,
      isLookup: false,
      options: {
        showAs: {
          type: SingleLineTextDisplayType.Email,
        },
      },
    };
  }
}
