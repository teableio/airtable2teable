import {
  AirtableCellTypeEnum,
  AirtableField,
  IAirtableCreatedByField,
} from 'types';

export class AirtableCreatedByField extends AirtableField {
  constructor(field: IAirtableCreatedByField) {
    super(field);
  }

  get cellType(): AirtableCellTypeEnum {
    return AirtableCellTypeEnum.OBJECT;
  }
}
