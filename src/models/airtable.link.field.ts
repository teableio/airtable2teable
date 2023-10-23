import {
  AirtableCellTypeEnum,
  AirtableField,
  IAirtableLinkField,
  Relationship,
  TeableFieldType,
} from 'types';

import { IFieldRo } from '../teable-sdks';

export class AirtableLinkField extends AirtableField {
  relationship: Relationship;
  constructor(field: IAirtableLinkField) {
    super(field);
    this.relationship = this.field.options?.prefersSingleRecordLink
      ? Relationship.ManyOne
      : Relationship.OneMany;
  }

  get cellType(): AirtableCellTypeEnum {
    return AirtableCellTypeEnum.ARRAY;
  }

  getTeableDBCellValue(value: unknown): string {
    return `'${String(value)}'`;
  }

  getApiCellValue(
    value: string[],
    tablesRecordIdsMap: Record<string, Record<string, string>>,
  ) {
    if (!value) {
      return null;
    }
    const linkedTableId = this.field.options?.linkedTableId;
    if (!linkedTableId) {
      throw new Error('linkedTableId is not defined');
    }
    const recordIdsMap = tablesRecordIdsMap[linkedTableId];
    if (this.relationship === Relationship.ManyOne) {
      return { id: recordIdsMap[value[0]] };
    }
    if (this.relationship === Relationship.OneMany) {
      return value.map((id) => ({
        id: recordIdsMap[id],
      }));
    }
    throw new Error('relationship is not support');
  }

  transformTeableFieldCreateRo(): IFieldRo {
    return {
      type: TeableFieldType.Link,
      name: this.name,
      description: this.description,
      isLookup: false,
      options: {
        relationship: this.relationship,
        foreignTableId: this.field.options?.linkedTableId,
      },
    };
  }
}
