import { AirtableCellTypeEnum, IAirtableTable, TeableFieldType } from 'types';
import { z } from 'zod';

import { ICountFieldOptionsVo, ILinkFieldOptionsVo } from '../airtable-sdks';
import { ICreateFieldRo, NumberFormattingType } from '../teable-sdks';
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

  transformTeableCreateFieldRo(tables: IAirtableTable[]): ICreateFieldRo {
    if (this.options.isValid) {
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
    if (!linkFieldId) {
      throw new Error('Link Field No Exist.');
    }
    const fields = tables
      .map((table) => table.fields)
      .flatMap((field) => field);
    const linkField = fields.find((field) => field.id === linkFieldId);
    if (!linkField) {
      throw new Error('Link Field No Exist.');
    }
    const linkFieldOptions: ILinkFieldOptionsVo = linkField.options;
    const foreignTableId = linkFieldOptions.linkedTableId;
    const lookupFieldId = linkFieldOptions.inverseLinkFieldId;
    if (!foreignTableId || !lookupFieldId) {
      throw new Error('Count Field Build Error.');
    }
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
        foreignTableId,
        lookupFieldId,
        linkFieldId,
      },
    };
  }
}
