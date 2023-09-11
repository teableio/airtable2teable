import {
  AirtableCellTypeEnum,
  AirtableField,
  IAirtableAutoNumberField,
} from 'types';

export class AirtableAutoNumberField extends AirtableField {
  constructor(field: IAirtableAutoNumberField) {
    super(field);
  }

  get cellType(): AirtableCellTypeEnum {
    return AirtableCellTypeEnum.NUMBER;
  }
}
