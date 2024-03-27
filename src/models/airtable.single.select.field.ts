import { AirtableCellTypeEnum, TeableFieldType } from 'types';

import { ISelectFieldOptionsVo } from '../airtable-sdks';
import { ICreateFieldRo } from '../teable-sdks';
import { AirtableFieldVo } from './airtable.field.vo';

export class AirtableSingleSelectField extends AirtableFieldVo {
  options: ISelectFieldOptionsVo;

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
