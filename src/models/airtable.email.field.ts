import {
  AirtableCellTypeEnum,
  AirtableField,
  IAirtableEmailField,
} from 'types';

export class AirtableEmailField extends AirtableField {
  constructor(field: IAirtableEmailField) {
    super(field);
  }

  get cellType(): AirtableCellTypeEnum {
    return AirtableCellTypeEnum.STRING;
  }

  getCellValue(value: any): string {
    return value;
  }
}
