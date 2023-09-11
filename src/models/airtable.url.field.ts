import { AirtableCellTypeEnum, AirtableField, IAirtableUrlField } from 'types';

export class AirtableUrlField extends AirtableField {
  constructor(field: IAirtableUrlField) {
    super(field);
  }

  get cellType(): AirtableCellTypeEnum {
    return AirtableCellTypeEnum.STRING;
  }
}
