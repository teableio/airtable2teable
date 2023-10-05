import {
  AirtableCellTypeEnum,
  AirtableField,
  IAirtableLastModifiedByField,
} from 'types';

export class AirtableLastModifiedByField extends AirtableField {
  constructor(field: IAirtableLastModifiedByField) {
    super(field);
  }

  get cellType(): AirtableCellTypeEnum {
    return AirtableCellTypeEnum.STRING;
  }

  getTeableDBCellValue(value: any): string {
    return `'${value.name}'`;
  }
}
