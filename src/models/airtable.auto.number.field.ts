import { TeableFieldType } from 'types';

import { INumberCellValueVo } from '../airtable-sdks';
import { ICreateFieldRo, INumberCellValue } from '../teable-sdks';
import { AirtableFieldVo } from './airtable.field.vo';

export class AirtableAutoNumberField extends AirtableFieldVo {
  options: undefined;

  transformTeableCreateRecordRo(value: INumberCellValueVo): INumberCellValue {
    return value;
  }

  transformTeableCreateFieldRo(): ICreateFieldRo {
    return {
      type: TeableFieldType.AutoNumber,
      name: this.name,
      description: this.description,
      isLookup: false,
      options: {
        expression: 'AUTO_NUMBER()',
      },
    };
  }
}
