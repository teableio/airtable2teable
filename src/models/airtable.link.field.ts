import {
  AirtableCellTypeEnum,
  IAirtableTable,
  TeableFieldType,
  TeableRelationship,
} from 'types';

import { ILinkFieldOptionsVo } from '../airtable-sdks';
import { ICreateFieldRo } from '../teable-sdks';
import { AirtableFieldVo } from './airtable.field.vo';

export class AirtableLinkField extends AirtableFieldVo {
  options: ILinkFieldOptionsVo;

  get cellType(): AirtableCellTypeEnum {
    return AirtableCellTypeEnum.ARRAY;
  }

  getApiCellValue(value: string[]) {
    if (!value) {
      return null;
    }
    const linkedTableId = this.options?.linkedTableId;
    if (!linkedTableId) {
      throw new Error('linkedTableId is not defined');
    }
    throw new Error('relationship is not support');
  }

  transformTeableCreateFieldRo(tables: IAirtableTable[]): ICreateFieldRo {
    const fields = tables
      .map((table) => table.fields)
      .flatMap((field) => field);
    const inverseLinkFieldId = this.options.inverseLinkFieldId;
    const inverseLinkField = fields.find(
      (field) => field.id === inverseLinkFieldId,
    );
    if (!inverseLinkField) {
      throw new Error('Inverse Link Field No Exist.');
    }
    const inverseLinkFieldOptions: ILinkFieldOptionsVo =
      inverseLinkField.options;
    let relationship: TeableRelationship;
    if (
      inverseLinkFieldOptions.prefersSingleRecordLink &&
      this.options.prefersSingleRecordLink
    ) {
      relationship = TeableRelationship.OneOne;
    } else if (
      !inverseLinkFieldOptions.prefersSingleRecordLink &&
      !this.options.prefersSingleRecordLink
    ) {
      relationship = TeableRelationship.ManyMany;
    } else if (this.options.prefersSingleRecordLink) {
      relationship = TeableRelationship.ManyOne;
    } else {
      relationship = TeableRelationship.OneMany;
    }
    return {
      type: TeableFieldType.Link,
      name: this.name,
      description: this.description,
      isLookup: false,
      options: {
        relationship,
        foreignTableId: this.options.linkedTableId,
      },
    };
  }
}
