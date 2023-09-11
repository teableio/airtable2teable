import {
  AirtableCellTypeEnum,
  AirtableField,
  IAirtableBarcodeField,
} from 'types';

export class AirtableBarcodeField extends AirtableField {
  constructor(field: IAirtableBarcodeField) {
    super(field);
  }

  get cellType(): AirtableCellTypeEnum {
    return AirtableCellTypeEnum.STRING;
  }
}
