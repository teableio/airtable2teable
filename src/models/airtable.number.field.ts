import {
  AirtableCellTypeEnum,
  AirtableField,
  IAirtableNumberField,
} from 'types';

export class AirtableNumberField extends AirtableField {
  constructor(field: IAirtableNumberField) {
    super(field);
  }

  get cellType(): AirtableCellTypeEnum {
    return AirtableCellTypeEnum.NUMBER;
  }

  getCellValue(value: any): number {
    return value;
  }
}
