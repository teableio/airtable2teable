import { TeableFieldType } from 'types';

import {
  INumberCellValueVo,
  IRollupFieldOptionsVo,
  ITextCellValueVo,
} from '../airtable-sdks';
import { ICreateFieldRo, IRollupCellValue } from '../teable-sdks';
import { AirtableFieldVo } from './airtable.field.vo';

export class AirtableRollupField extends AirtableFieldVo {
  options: IRollupFieldOptionsVo;

  transformTeableCreateRecordRo(
    value: INumberCellValueVo[] | ITextCellValueVo[],
  ): IRollupCellValue {
    return value;
  }

  transformTeableCreateFieldRo(): ICreateFieldRo {
    return {
      type: TeableFieldType.SingleLineText,
      name: this.name,
      dbFieldName: this.id,
      description: this.description,
      isLookup: false,
      options: {},
    };
    /*
    if (!this.options.isValid) {
      return {
        type: TeableFieldType.SingleLineText,
        name: this.name,
        description: this.description,
        isLookup: false,
        options: {},
      };
    }
    const referencedFieldIds = this.options.referencedFieldIds || [];
    const table = tables.find((table) => table.id === this.tableId)!;
    const newTable = mappingTable(tables, newTables, table.id)!;
    for (const referencedFieldId of referencedFieldIds) {
      const referencedField = table.fields.find(
        (field) => field.id === referencedFieldId,
      )!;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const mappingReferencedField = newTable.fields.find(
        (field) => field.name === referencedField.name,
      )!;
    }
    const recordLinkField = table.fields.find(
      (field) => field.id === this.options.recordLinkFieldId,
    )!;
    const mappingRecordLinkField = newTable.fields.find(
      (field) => field.name === recordLinkField.name,
    )!;
    const lookupFieldId = this.options.fieldIdInLinkedTable;
    let lookupField: IAirtableFieldVo | undefined;
    const foreignTable = tables.find((table) => {
      lookupField = table.fields.find((field) => field.id === lookupFieldId);
      return !!lookupField;
    })!;
    const mappingForeignTable = mappingTable(
      tables,
      newTables,
      foreignTable.id,
    )!;
    const mappingLookupField = mappingForeignTable.fields.find(
      (field) => field.name === lookupField!.name,
    )!;
    return {
      type: TeableFieldType.Rollup,
      name: this.name,
      description: this.description,
      lookupOptions: {
        foreignTableId: mappingForeignTable.id,
        lookupFieldId: mappingLookupField.id,
        linkFieldId: mappingRecordLinkField.id,
      },
      options: {
        expression: '',
      },
    };
    */
  }
}
