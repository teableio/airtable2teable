import {
  AirtableCellTypeEnum,
  AirtableField,
  IAirtableRichTextField,
} from 'types';

export class AirtableRichTextField extends AirtableField {
  constructor(field: IAirtableRichTextField) {
    super(field);
  }

  get cellType(): AirtableCellTypeEnum {
    return AirtableCellTypeEnum.STRING;
  }
}
