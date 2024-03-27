import { ICreateFieldRo } from 'teable-sdks';
import { AirtableCellTypeEnum, IAirtableTable, TeableFieldType } from 'types';
import { z } from 'zod';

import { ILookupFieldOptionsVo } from '../airtable-sdks';
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

  transformTeableCreateFieldRo(tables: IAirtableTable[]): ICreateFieldRo {
    if (this.options.isValid) {
      return {
        type: TeableFieldType.SingleLineText,
        name: this.name,
        description: this.description,
        isLookup: false,
        options: {},
      };
    }
    const lookupFieldId = this.options.fieldIdInLinkedTable;
    const table = tables.find((table) => {
      table.fields.find((field) => field.id === lookupFieldId);
    });
    if (!table) {
      throw new Error('Foreign Table No Exist');
    }
    const field = getAirtableField(
      this.options.result,
    ).transformTeableCreateFieldRo(tables);
    return {
      name: this.name,
      description: this.description,
      type: field.type,
      options: field.options,
      isLookup: true,
      lookupOptions: {
        foreignTableId: table.id,
        lookupFieldId,
        linkFieldId: this.options.recordLinkFieldId,
      },
    };
  }
}
