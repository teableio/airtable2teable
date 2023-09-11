import { AirtableCellTypeEnum, AirtableField, IAirtableDateField } from 'types';

export class AirtableDateField extends AirtableField {
  constructor(field: IAirtableDateField) {
    super(field);
  }

  get cellType(): AirtableCellTypeEnum {
    return AirtableCellTypeEnum.STRING;
  }
}
