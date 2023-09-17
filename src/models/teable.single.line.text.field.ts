import { TeableCellValueType, TeableField, TeableFieldType } from 'types';
import { z } from 'zod';

export const singleLineTextFieldOptionsSchema = z.object({}).strict();

export type ISingleLineTextFieldOptions = z.infer<
  typeof singleLineTextFieldOptionsSchema
>;

export const singleLineTextCelValueSchema = z.string();

export type ISingleLineTextCellValue = z.infer<
  typeof singleLineTextCelValueSchema
>;

export class TeableSingleLineTextField extends TeableField {
  type!: TeableFieldType.SingleLineText;

  options!: ISingleLineTextFieldOptions;

  cellValueType!: TeableCellValueType.String;

  static defaultOptions(): ISingleLineTextFieldOptions {
    return {};
  }

  cellValue2String(cellValue?: unknown) {
    if (this.isMultipleCellValue && Array.isArray(cellValue)) {
      return cellValue.join(', ');
    }
    return (cellValue as string) ?? '';
  }

  item2String(value?: unknown): string {
    return value ? String(value) : '';
  }

  convertStringToCellValue(value: string): string | null {
    if (this.isLookup) {
      return null;
    }

    if (value === '' || value == null) {
      return null;
    }

    return value;
  }

  repair(value: unknown) {
    if (this.isLookup) {
      return null;
    }

    if (typeof value === 'string') {
      return this.convertStringToCellValue(value);
    }
    return String(value);
  }

  validateOptions() {
    return singleLineTextFieldOptionsSchema.safeParse(this.options);
  }

  validateCellValue(value: unknown) {
    if (this.isMultipleCellValue) {
      return z
        .array(singleLineTextCelValueSchema)
        .nonempty()
        .optional()
        .safeParse(value);
    }
    return singleLineTextCelValueSchema.optional().safeParse(value);
  }
}
