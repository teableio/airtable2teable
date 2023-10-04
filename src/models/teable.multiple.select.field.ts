import { z } from 'zod';

import { TeableCellValueType, TeableFieldType } from '../types';
import { TeableSelectField } from './teable.select.field';

export const multipleSelectCelValueSchema = z.array(z.string());

export type IMultipleSelectCellValue = z.infer<
  typeof multipleSelectCelValueSchema
>;

export class TeableMultipleSelectField extends TeableSelectField {
  type!: TeableFieldType.MultipleSelect;

  cellValueType!: TeableCellValueType.String;

  isMultipleCellValue = true;

  convertStringToCellValue(
    value: string,
    shouldExtend?: boolean,
  ): string[] | null {
    if (value === '' || value == null) {
      return null;
    }

    let cellValue = value.split(', ');
    cellValue = shouldExtend
      ? cellValue
      : cellValue.filter((value) =>
          this.options.choices.find((c) => c.name === value),
        );

    if (cellValue.length === 0) {
      return null;
    }

    return cellValue;
  }

  repair(value: unknown) {
    if (Array.isArray(value)) {
      const cellValue = value.filter((value) =>
        this.options.choices.find((c) => c.name === value),
      );

      if (cellValue.length === 0) {
        return null;
      }
      return cellValue;
    }

    if (typeof value === 'string') {
      return this.convertStringToCellValue(value);
    }

    throw new Error(`invalid value: ${value} for field: ${this.name}`);
  }
}
