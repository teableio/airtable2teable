import {
  AirtableCellTypeEnum,
  AirtableField,
  IAirtableLastModifiedByField,
  TeableFieldType,
} from 'types';

import { IFieldRo } from '../teable-sdks';

export class AirtableLastModifiedByField extends AirtableField {
  constructor(field: IAirtableLastModifiedByField) {
    super(field);
  }

  get cellType(): AirtableCellTypeEnum {
    return AirtableCellTypeEnum.STRING;
  }

  getTeableDBCellValue(value: any): string {
    return `'${value.name}'`;
  }

  transformTeableFieldCreateRo(): IFieldRo {
    return {
      id: this.id,
      type: TeableFieldType.SingleSelect,
      name: this.name,
      description: this.description,
      isLookup: false,
      options: {
        choices: [],
      },
    };
  }
}
