import { AirtableCellTypeEnum, IAirtableTable, TeableFieldType } from 'types';
import { z } from 'zod';

import { ICountFieldOptionsVo, ILinkFieldOptionsVo } from '../airtable-sdks';
import {
  ICreateFieldRo,
  ITableTableVo,
  NumberFormattingType,
} from '../teable-sdks';
import { mappingTable } from '../utils';
import { AirtableFieldVo } from './airtable.field.vo';

export const countCellValueSchema = z.number();

export type ICountCellValueVo = z.infer<typeof countCellValueSchema>;
export class AirtableCountField extends AirtableFieldVo {
  options: ICountFieldOptionsVo;

  get cellType(): AirtableCellTypeEnum {
    return AirtableCellTypeEnum.NUMBER;
  }

  getApiCellValue(value: ICountCellValueVo) {
    return value;
  }

  transformTeableCreateFieldRo(
    tables: IAirtableTable[],
    newTables: ITableTableVo[],
  ): ICreateFieldRo {
    if (!this.options.isValid) {
      return {
        type: TeableFieldType.Number,
        name: this.name,
        description: this.description,
        isLookup: false,
        options: {
          formatting: {
            type: NumberFormattingType.Decimal,
            precision: 0,
          },
        },
      };
    }
    const linkFieldId = this.options.recordLinkFieldId;
    const table = tables.find((table) => table.id === this.tableId)!;
    const linkField = table.fields.find((field) => field.id === linkFieldId)!;
    const newTable = mappingTable(tables, newTables, this.tableId)!;
    const mappingLinkField = newTable.fields.find(
      (field) => linkField.name === field.name,
    )!;
    const linkFieldOptions: ILinkFieldOptionsVo = linkField.options;
    const foreignTableId = linkFieldOptions.linkedTableId!;
    const lookupFieldId = linkFieldOptions.inverseLinkFieldId!;
    const foreignTable = tables.find((table) => table.id === foreignTableId)!;
    const lookupField = foreignTable.fields.find(
      (field) => field.id === lookupFieldId,
    )!;
    const mappingForeignTable = mappingTable(
      tables,
      newTables,
      foreignTableId,
    )!;
    const mappingLookupField = mappingForeignTable!.fields.find(
      (field) => field.name === lookupField.name,
    )!;
    return {
      type: TeableFieldType.Rollup,
      name: this.name,
      description: this.description,
      isLookup: false,
      options: {
        expression: 'countall({values})',
        formatting: {
          type: NumberFormattingType.Decimal,
          precision: 0,
        },
      },
      lookupOptions: {
        foreignTableId: mappingForeignTable.id,
        lookupFieldId: mappingLookupField.id,
        linkFieldId: mappingLinkField.id,
      },
    };
  }
}
