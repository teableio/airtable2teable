import { AirtableCellTypeEnum, TeableFieldType } from 'types';

import { ISelectFieldOptionsVo } from '../airtable-sdks';
import { ICreateFieldRo } from '../teable-sdks';
import { AirtableFieldVo } from './airtable.field.vo';

export class AirtableMultipleSelectsField extends AirtableFieldVo {
  options: ISelectFieldOptionsVo;

  get cellType(): AirtableCellTypeEnum {
    return AirtableCellTypeEnum.ARRAY;
  }

  getApiCellValue(value: string[]): string[] {
    return value;
  }

  transformTeableCreateFieldRo(): ICreateFieldRo {
    return {
      type: TeableFieldType.MultipleSelect,
      name: this.name,
      description: this.description,
      isLookup: false,
      options: {
        choices: this.options?.choices || [],
      },
    };
  }
}
