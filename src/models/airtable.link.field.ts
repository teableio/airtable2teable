import { AirtableCellTypeEnum, AirtableField, IAirtableLinkField } from 'types';

export class AirtableLinkField extends AirtableField {
  constructor(field: IAirtableLinkField) {
    super(field);
  }

  get cellType(): AirtableCellTypeEnum {
    return AirtableCellTypeEnum.ARRAY;
  }

  getTeableDBCellValue(value: unknown): string {
    return `'${String(value)}'`;
  }
}
