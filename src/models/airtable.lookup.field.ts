import { ICreateFieldRo, ITableTableVo } from 'teable-sdks';
import { AirtableCellTypeEnum, IAirtableTable, TeableFieldType } from 'types';
import { z } from 'zod';

import { IAirtableFieldVo, ILookupFieldOptionsVo } from '../airtable-sdks';
import { mappingTable } from '../utils';
import { AirtableFieldVo } from './airtable.field.vo';
import { getAirtableField } from './index';

export const lookupCellValueSchema = z
  .union([z.number(), z.string(), z.boolean(), z.any()])
  .array();

export type ILookupCellValueVo = z.infer<typeof lookupCellValueSchema>;

export class AirtableLookupField extends AirtableFieldVo {
  options: ILookupFieldOptionsVo;

  get cellType(): AirtableCellTypeEnum {
    return AirtableCellTypeEnum.ARRAY;
  }

  getApiCellValue(value: ILookupCellValueVo) {
    return value;
  }

  transformTeableCreateFieldRo(
    tables: IAirtableTable[],
    newTables: ITableTableVo[],
  ): ICreateFieldRo {
    if (!this.options.isValid) {
      return {
        type: TeableFieldType.SingleLineText,
        name: this.name,
        description: this.description,
        isLookup: false,
        options: {},
      };
    }
    const table = tables.find((table) => table.id === this.tableId)!;
    const newTable = newTables.find(
      (newTable) => table.name === newTable.name,
    )!;
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
    const field = getAirtableField(
      this.options.result,
    ).transformTeableCreateFieldRo(tables, newTables);
    return {
      name: this.name,
      description: this.description,
      type: field.type,
      options: field.options,
      isLookup: true,
      lookupOptions: {
        foreignTableId: mappingForeignTable.id,
        lookupFieldId: mappingLookupField.id,
        linkFieldId: mappingRecordLinkField.id,
      },
    };
  }
}
