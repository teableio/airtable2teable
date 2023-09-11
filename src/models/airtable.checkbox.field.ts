import {
  AirtableCellTypeEnum,
  AirtableField,
  IAirtableCheckboxField,
} from 'types';

export class AirtableCheckboxField extends AirtableField {
  constructor(field: IAirtableCheckboxField) {
    super(field);
  }

  get cellType(): AirtableCellTypeEnum {
    return AirtableCellTypeEnum.TRUE;
  }
}
