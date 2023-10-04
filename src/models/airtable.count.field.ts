import {
  AirtableCellTypeEnum,
  AirtableField,
  IAirtableCountField,
} from 'types';

export class AirtableCountField extends AirtableField {
  constructor(field: IAirtableCountField) {
    super(field);
  }

  get cellType(): AirtableCellTypeEnum {
    return AirtableCellTypeEnum.NUMBER;
  }

  getTeableCellValue(value: any): string {
    return value;
  }
}
