import { AirtableCellTypeEnum, TeableFieldType } from 'types';

import { IFieldRo } from '../teable-sdks';
import { AirtableFieldVo } from './airtable.field.vo';

export class AirtableLinkField extends AirtableFieldVo {
  // relationship: TeableRelationship;
  // constructor(field: IAirtableLinkField) {
  //   super(field);
  //   this.relationship = this.field.options?.prefersSingleRecordLink
  //     ? TeableRelationship.ManyOne
  //     : TeableRelationship.OneMany;
  // }

  get cellType(): AirtableCellTypeEnum {
    return AirtableCellTypeEnum.ARRAY;
  }

  getApiCellValue(
    value: string[],
    // tablesRecordIdsMap: Record<string, Record<string, string>>,
  ) {
    if (!value) {
      return null;
    }
    const linkedTableId = this.options?.linkedTableId;
    if (!linkedTableId) {
      throw new Error('linkedTableId is not defined');
    }
    // const recordIdsMap = tablesRecordIdsMap[linkedTableId];
    // if (this.relationship === TeableRelationship.ManyOne) {
    //   return { id: recordIdsMap[value[0]] };
    // }
    // if (this.relationship === TeableRelationship.OneMany) {
    //   return value.map((id) => ({
    //     id: recordIdsMap[id],
    //   }));
    // }
    throw new Error('relationship is not support');
  }

  transformTeableFieldCreateRo(): IFieldRo {
    return {
      type: TeableFieldType.Link,
      name: this.name,
      description: this.description,
      isLookup: false,
      options: {
        // relationship: this.relationship,
        foreignTableId: this.options?.linkedTableId,
      },
    };
  }
}
