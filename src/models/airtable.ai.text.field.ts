import {
  AirtableCellTypeEnum,
  AirtableField,
  IAirtableAiTextField,
} from 'types';

export class AirtableAiTextField extends AirtableField {
  constructor(field: IAirtableAiTextField) {
    super(field);
  }

  get cellType(): AirtableCellTypeEnum {
    return AirtableCellTypeEnum.STRING;
  }
}
