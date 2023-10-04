import {
  AirtableCellTypeEnum,
  AirtableField,
  IAirtableFormulaField,
} from 'types';

export class AirtableFormulaField extends AirtableField {
  constructor(field: IAirtableFormulaField) {
    super(field);
  }

  get cellType(): AirtableCellTypeEnum {
    return AirtableCellTypeEnum.STRING;
  }

  getTeableCellValue(value: any): string {
    return value + '';
  }
}
