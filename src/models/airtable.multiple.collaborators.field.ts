import {
  AirtableCellTypeEnum,
  AirtableField,
  IAirtableMultipleCollaboratorsField,
} from 'types';

export class AirtableMultipleCollaboratorsField extends AirtableField {
  constructor(field: IAirtableMultipleCollaboratorsField) {
    super(field);
  }

  get cellType(): AirtableCellTypeEnum {
    return AirtableCellTypeEnum.ARRAY;
  }

  getTeableDBCellValue(value: unknown): string {
    return `'${String((value as any[]).map((v) => v.name))}'`;
  }
}
