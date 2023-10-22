import {
  AirtableCellTypeEnum,
  AirtableField,
  IAirtableSyncSourceField,
} from 'types';

export class AirtableSyncSourceField extends AirtableField {
  constructor(field: IAirtableSyncSourceField) {
    super(field);
  }

  get cellType(): AirtableCellTypeEnum {
    return AirtableCellTypeEnum.STRING;
  }

  getTeableDBCellValue(value: any): string {
    return `'${value}'`;
  }

  getApiCellValue(value: unknown): string {
    return value as string;
  }
}
