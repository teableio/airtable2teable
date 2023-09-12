import {
  AirtableCellTypeEnum,
  AirtableField,
  IAirtablePhoneField,
} from 'types';

export class AirtablePhoneField extends AirtableField {
  constructor(field: IAirtablePhoneField) {
    super(field);
  }

  get cellType(): AirtableCellTypeEnum {
    return AirtableCellTypeEnum.STRING;
  }

  getCellValue(value: any): string {
    return value;
  }
}
