import {
  AirtableCellTypeEnum,
  AirtableField,
  IAirtableCreatedTimeField,
} from 'types';

export class AirtableCreatedTimeField extends AirtableField {
  constructor(field: IAirtableCreatedTimeField) {
    super(field);
  }

  get cellType(): AirtableCellTypeEnum {
    return AirtableCellTypeEnum.STRING;
  }
}
