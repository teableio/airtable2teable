import {
  AirtableCellTypeEnum,
  AirtableField,
  IAirtablePercentField,
} from 'types';

export class AirtablePercentField extends AirtableField {
  constructor(field: IAirtablePercentField) {
    super(field);
  }

  get cellType(): AirtableCellTypeEnum {
    return AirtableCellTypeEnum.NUMBER;
  }

  getCellValue(value: any): number {
    return value;
  }
}
