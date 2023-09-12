import {
  AirtableCellTypeEnum,
  AirtableField,
  IAirtableMultipleSelectsField,
} from 'types';

export class AirtableMultipleSelectsField extends AirtableField {
  constructor(field: IAirtableMultipleSelectsField) {
    super(field);
  }

  get cellType(): AirtableCellTypeEnum {
    return AirtableCellTypeEnum.ARRAY;
  }

  getCellValue(value: any): string[] {
    return value;
  }
}
