import {
  AirtableCellTypeEnum,
  AirtableField,
  IAirtableButtonField,
} from 'types';

export class AirtableButtonField extends AirtableField {
  constructor(field: IAirtableButtonField) {
    super(field);
  }

  get cellType(): AirtableCellTypeEnum {
    return AirtableCellTypeEnum.STRING;
  }

  getCellValue(value: any): string {
    return value?.label;
  }
}
