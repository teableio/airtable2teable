import { z } from 'zod';

import { TeableCellValueType, TeableField, TeableFieldType } from '../types';

export const checkboxFieldOptionsSchema = z.object({}).strict();

export type ICheckboxFieldOptions = z.infer<typeof checkboxFieldOptionsSchema>;

export const booleanCellValueSchema = z.boolean();

export type ICheckboxCellValue = z.infer<typeof booleanCellValueSchema>;

export class TeableCheckboxField extends TeableField {
  type!: TeableFieldType.Checkbox;

  options!: ICheckboxFieldOptions;

  cellValueType!: TeableCellValueType.Boolean;

  static defaultOptions(): ICheckboxFieldOptions {
    return {};
  }

  cellValue2String(cellValue?: unknown) {
    if (cellValue == null) {
      return '';
    }

    if (this.isMultipleCellValue && Array.isArray(cellValue)) {
      return cellValue.map(String).join(', ');
    }

    return String(cellValue);
  }

  convertStringToCellValue(value: string): boolean | null {
    if (this.isLookup) {
      return null;
    }

    return value ? true : null;
  }

  repair(value: unknown) {
    if (this.isLookup) {
      return null;
    }

    return value ? true : null;
  }

  item2String(item?: unknown) {
    return item ? 'true' : '';
  }

  validateOptions() {
    return checkboxFieldOptionsSchema.safeParse(this.options);
  }

  // checkbox value only allow true or null, false should be convert to null
  validateCellValue(value: unknown) {
    if (this.isMultipleCellValue) {
      return z.array(z.literal(true)).nonempty().nullable().safeParse(value);
    }
    return z.literal(true).nullable().safeParse(value);
  }
}
