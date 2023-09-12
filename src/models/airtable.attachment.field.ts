import {
  AirtableCellTypeEnum,
  AirtableField,
  IAirtableAttachmentField,
} from 'types';

export class AirtableAttachmentField extends AirtableField {
  constructor(field: IAirtableAttachmentField) {
    super(field);
  }

  get cellType(): AirtableCellTypeEnum {
    return AirtableCellTypeEnum.STRING;
  }

  getCellValue(value: any): string {
    return value?.filename;
  }
}
