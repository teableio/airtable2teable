import {
  AirtableCellTypeEnum,
  AirtableField,
  IAirtableSingleSelectField,
} from 'types';

export class AirtableSingleSelectField extends AirtableField {
  constructor(field: IAirtableSingleSelectField) {
    super(field);
  }

  get cellType(): AirtableCellTypeEnum {
    return AirtableCellTypeEnum.STRING;
  }

  getCellValue(value: any): string {
    return value;
  }
}
