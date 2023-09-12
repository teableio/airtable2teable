import {
  AirtableCellTypeEnum,
  AirtableField,
  IAirtableLastModifiedTimeField,
} from 'types';

export class AirtableLastModifiedTimeField extends AirtableField {
  constructor(field: IAirtableLastModifiedTimeField) {
    super(field);
  }

  get cellType(): AirtableCellTypeEnum {
    return AirtableCellTypeEnum.STRING;
  }

  getCellValue(value: any): string {
    return value;
  }
}
