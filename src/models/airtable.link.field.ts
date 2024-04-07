import { IAirtableTable, TeableFieldType, TeableRelationship } from 'types';

import { ILinkCellValueVo, ILinkFieldOptionsVo } from '../airtable-sdks';
import { ICreateFieldRo, ILinkCellValue, ITableTableVo } from '../teable-sdks';
import { mappingTable } from '../utils';
import { AirtableFieldVo } from './airtable.field.vo';

export class AirtableLinkField extends AirtableFieldVo {
  options: ILinkFieldOptionsVo;

  transformTeableCreateRecordRo(
    value: ILinkCellValueVo,
  ): ILinkCellValue[] | ILinkCellValue {
    if (this.options.prefersSingleRecordLink) {
      return value[0]
        ? {
            id: value[0]!,
          }
        : [];
    }
    return (
      value?.map((link) => {
        return {
          id: link,
        };
      }) || []
    );
  }

  transformTeableCreateFieldRo(
    tables: IAirtableTable[],
    newTables: ITableTableVo[],
  ): ICreateFieldRo {
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
    const newTable = mappingTable(
      tables,
      newTables,
      this.options.linkedTableId,
    );
    return {
      type: TeableFieldType.Link,
      name: this.name,
      description: this.description,
      isLookup: false,
      options: {
        relationship,
        foreignTableId: newTable!.id,
      },
    };
  }
}
