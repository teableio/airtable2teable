import { SafeParseReturnType } from 'zod';

import { TeableCellValueType } from './teable.cell.value.type';
import { TeableDbFieldType } from './teable.db.field.type';
import { TeableFieldType } from './teable.field.type.enum';
import { IColumnMeta, IFieldVo, ILookupOptionsVo } from './teable.field.vo';

export abstract class TeableField implements IFieldVo {
  id!: string;

  name!: string;

  description?: string;

  notNull?: boolean;

  unique?: boolean;

  isPrimary?: boolean;

  columnMeta!: IColumnMeta;

  dbFieldName!: string;

  abstract type: TeableFieldType;

  isComputed?: boolean;

  hasError?: boolean;

  dbFieldType!: TeableDbFieldType;

  abstract options: IFieldVo['options'];

  // cellValue type enum (string, number, boolean, datetime)
  abstract cellValueType: TeableCellValueType;

  // if cellValue multiple
  // every field need to consider to support multiple cellValue, because lookup value may be multiple
  isMultipleCellValue?: boolean;

  // if this field is lookup field
  isLookup?: boolean;

  lookupOptions?: ILookupOptionsVo;

  /**
   * some field may store a json type item, we need to know how to convert it to string
   * it has those difference between cellValue2String
   * item is the fundamental element of a cellValue, but cellValue may be a Array
   * example a link cellValue: [{title: 'A1', id: 'rec1'}, {title: 'A2', id: 'rec2'}]
   * in this case, {title: 'A1', id: 'rec1'} is the item in cellValue.
   *
   * caution:
   * this function should handle the case that item is undefined
   */
  abstract item2String(value?: unknown): string;

  abstract cellValue2String(value?: unknown): string;

  abstract convertStringToCellValue(str: string, ctx?: unknown): unknown;

  /**
   * try parse cellValue as possible as it can
   * if not match it would return null
   * * computed field is always return null
   */
  abstract repair(value: unknown): unknown;

  abstract validateOptions(): SafeParseReturnType<unknown, unknown> | undefined;

  abstract validateCellValue(
    value: unknown,
  ): SafeParseReturnType<unknown, unknown> | undefined;
}
