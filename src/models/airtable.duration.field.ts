import {
  AirtableCellTypeEnum,
  AirtableField,
  IAirtableDurationField,
} from 'types';

export class AirtableDurationField extends AirtableField {
  constructor(field: IAirtableDurationField) {
    super(field);
  }

  get cellType(): AirtableCellTypeEnum {
    return AirtableCellTypeEnum.NUMBER;
  }

  getApiCellValue(value: number): number {
    return value;
  }
}
