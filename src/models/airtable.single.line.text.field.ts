import {
  AirtableCellTypeEnum,
  AirtableField,
  IAirtableSingleLineTextField,
} from 'types';

export class AirtableSingleLineTextField extends AirtableField {
  constructor(field: IAirtableSingleLineTextField) {
    super(field);
  }

  get cellType(): AirtableCellTypeEnum {
    return AirtableCellTypeEnum.STRING;
  }

  getCellValue(value: any): string {
    return value;
  }
}
