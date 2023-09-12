import {
  AirtableCellTypeEnum,
  AirtableField,
  IAirtableCurrencyField,
} from 'types';

export class AirtableCurrencyField extends AirtableField {
  constructor(field: IAirtableCurrencyField) {
    super(field);
  }

  get cellType(): AirtableCellTypeEnum {
    return AirtableCellTypeEnum.NUMBER;
  }

  getCellValue(value: any): number {
    return value;
  }
}
