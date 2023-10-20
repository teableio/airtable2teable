import {
  AirtableCellTypeEnum,
  AirtableField,
  IAirtableMultipleCollaboratorsField,
  TeableFieldType,
} from 'types';

import { IFieldRo } from '../teable-sdks';

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

  transformTeableFieldCreateRo(): IFieldRo {
    return {
      id: this.id,
      type: TeableFieldType.MultipleSelect,
      name: this.name,
      description: this.description,
      isLookup: false,
      options: {
        choices: [],
      },
    };
  }
}
