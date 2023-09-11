import {
  AirtableCellTypeEnum,
  AirtableField,
  IAirtableLookupField,
} from 'types';

export class AirtableLookupField extends AirtableField {
  constructor(field: IAirtableLookupField) {
    super(field);
  }

  get cellType(): AirtableCellTypeEnum {
    return AirtableCellTypeEnum.ARRAY;
  }
}
