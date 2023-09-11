import {
  AirtableCellTypeEnum,
  AirtableField,
  IAirtableRatingField,
} from 'types';

export class AirtableRatingField extends AirtableField {
  constructor(field: IAirtableRatingField) {
    super(field);
  }

  get cellType(): AirtableCellTypeEnum {
    return AirtableCellTypeEnum.NUMBER;
  }
}
