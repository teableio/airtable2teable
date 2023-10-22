import {
  AirtableCellTypeEnum,
  AirtableField,
  IAirtableCollaboratorField,
  TeableFieldType,
} from 'types';

import { IFieldRo } from '../teable-sdks';

export class AirtableCollaboratorField extends AirtableField {
  constructor(field: IAirtableCollaboratorField) {
    super(field);
  }

  get cellType(): AirtableCellTypeEnum {
    return AirtableCellTypeEnum.STRING;
  }

  getTeableDBCellValue(value: any): string {
    return `'${value?.name}'`;
  }

  getApiCellValue(value: any): string {
    return value?.name;
  }

  transformTeableFieldCreateRo(): IFieldRo {
    return {
      type: TeableFieldType.SingleSelect,
      name: this.name,
      description: this.description,
      isLookup: false,
      options: {
        choices: [],
      },
    };
  }
}
