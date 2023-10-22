import {
  AirtableCellTypeEnum,
  AirtableField,
  IAirtableButtonField,
  TeableFieldType,
} from 'types';

import { IFieldRo } from '../teable-sdks';

export class AirtableButtonField extends AirtableField {
  constructor(field: IAirtableButtonField) {
    super(field);
  }

  get cellType(): AirtableCellTypeEnum {
    return AirtableCellTypeEnum.STRING;
  }

  getTeableDBCellValue(value: any): string {
    return `'${value?.label}'`;
  }

  getApiCellValue(value: any): string {
    return value?.label;
  }

  transformTeableFieldCreateRo(): IFieldRo {
    return {
      type: TeableFieldType.SingleLineText,
      name: this.name,
      description: this.description,
      isLookup: false,
      options: {},
    };
  }
}
