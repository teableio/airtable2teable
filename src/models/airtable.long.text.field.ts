import {
  AirtableCellTypeEnum,
  AirtableField,
  IAirtableLongTextField,
} from 'types';

export class AirtableLongTextField extends AirtableField {
  constructor(field: IAirtableLongTextField) {
    super(field);
  }

  get cellType(): AirtableCellTypeEnum {
    return AirtableCellTypeEnum.STRING;
  }

  getCellValue(value: any): string {
    return value;
  }
}
