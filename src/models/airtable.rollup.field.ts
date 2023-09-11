import {
  AirtableCellTypeEnum,
  AirtableField,
  IAirtableRollupField,
} from 'types';

export class AirtableRollupField extends AirtableField {
  constructor(field: IAirtableRollupField) {
    super(field);
  }

  get cellType(): AirtableCellTypeEnum {
    return AirtableCellTypeEnum.ANY;
  }
}
