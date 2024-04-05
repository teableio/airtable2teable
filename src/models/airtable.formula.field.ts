import { AirtableCellTypeEnum, IAirtableTable, TeableFieldType } from 'types';
import { z } from 'zod';

import { IFormulaFieldOptionsVo } from '../airtable-sdks';
import { ICreateFieldRo, ITableTableVo } from '../teable-sdks';
import { mappingTable } from '../utils';
import { AirtableFieldVo } from './airtable.field.vo';

export const formulaCellValueSchema = z.union([
  z.string(),
  z.number(),
  z.union([z.string(), z.number()]).array(),
]);

export type IFormulaCellValueVo = z.infer<typeof formulaCellValueSchema>;

export class AirtableFormulaField extends AirtableFieldVo {
  options: IFormulaFieldOptionsVo;

  get cellType(): AirtableCellTypeEnum {
    return AirtableCellTypeEnum.ANY;
  }

  getApiCellValue(value: IFormulaCellValueVo) {
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
    const referencedFieldIds = this.options.referencedFieldIds || [];
    let formula = this.options.formula;
    const table = tables.find((table) => table.id === this.tableId)!;
    const newTable = mappingTable(tables, newTables, table.id)!;
    for (const referencedFieldId of referencedFieldIds) {
      const referencedField = table.fields.find(
        (field) => field.id === referencedFieldId,
      )!;
      const mappingReferencedField = newTable.fields.find(
        (field) => field.name === referencedField.name,
      )!;
      formula = formula.replace(referencedFieldId, mappingReferencedField.id);
    }
    return {
      type: TeableFieldType.Formula,
      name: this.name,
      description: this.description,
      isLookup: false,
      options: {
        expression: formula,
      },
    };
  }
}
