import {
  AirtableCellTypeEnum,
  AirtableField,
  IAirtableDateTimeField,
} from 'types';

export class AirtableDateTimeField extends AirtableField {
  constructor(field: IAirtableDateTimeField) {
    super(field);
  }

  get cellType(): AirtableCellTypeEnum {
    return AirtableCellTypeEnum.STRING;
  }

  getCellValue(value: any): string {
    return value;
  }
}
