import {
  AirtableCellTypeEnum,
  AirtableField,
  IAirtableLinkField,
  Relationship,
  TeableFieldType,
} from 'types';

import { IFieldRo } from '../teable-sdks';

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

  getApiCellValue(value: unknown): string[] {
    return value as string[];
  }

  transformTeableFieldCreateRo(): IFieldRo {
    return {
      type: TeableFieldType.Link,
      name: this.name,
      description: this.description,
      isLookup: false,
      options: {
        relationship: Relationship.ManyMany,
        foreignTableId: this.field.options?.linkedTableId,
      },
    };
  }
}
