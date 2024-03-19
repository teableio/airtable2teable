import {
  AirtableCellTypeEnum,
  AirtableField,
  IAirtableLinkField,
  TeableFieldType,
  TeableRelationship,
} from 'types';

import { IFieldRo } from '../teable-sdks';

export class AirtableLinkField extends AirtableField {
  relationship: TeableRelationship;
  constructor(field: IAirtableLinkField) {
    super(field);
    this.relationship = this.field.options?.prefersSingleRecordLink
      ? TeableRelationship.ManyOne
      : TeableRelationship.OneMany;
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
    if (this.relationship === TeableRelationship.ManyOne) {
      return { id: recordIdsMap[value[0]] };
    }
    if (this.relationship === TeableRelationship.OneMany) {
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
