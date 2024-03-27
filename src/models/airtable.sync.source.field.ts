import { AirtableCellTypeEnum, TeableFieldType } from 'types';

import { ICreateFieldRo } from '../teable-sdks';
import { AirtableFieldVo } from './airtable.field.vo';

export class AirtableSyncSourceField extends AirtableFieldVo {
  get cellType(): AirtableCellTypeEnum {
    return AirtableCellTypeEnum.STRING;
  }
  getApiCellValue(value: string) {
    return value;
  }

  transformTeableCreateFieldRo(): ICreateFieldRo {
    return {
      type: TeableFieldType.SingleSelect,
      name: this.name,
      description: this.description,
      isLookup: false,
      options: {
        choices: this.options.choices,
      },
    };
  }
}
