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

  getTeableDBCellValue(value: any): string {
    return `'${value?.filename}'`;
  }

  getApiCellValue(value: any): string {
    return value?.map((file) => file.filename).join(',');
  }
}
