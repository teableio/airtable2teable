import { z } from 'zod';

import { TeableCellValueType, TeableFieldType } from '../types';
import { TeableSelectField } from './teable.select.field';

export const singleSelectCelValueSchema = z.string();

export type ISingleSelectCellValue = z.infer<typeof singleSelectCelValueSchema>;

export class TeableSingleSelectField extends TeableSelectField {
  type!: TeableFieldType.SingleSelect;

  cellValueType!: TeableCellValueType.String;

  convertStringToCellValue(
    value: string,
    shouldExtend?: boolean,
  ): string | null {
    if (this.isLookup) {
      return null;
    }

    if (value === '' || value == null) {
      return null;
    }

    if (shouldExtend) {
      return String(value);
    }

    if (this.options.choices.find((c) => c.name === value)) {
      return value;
    }

    return null;
  }

  repair(value: unknown) {
    if (this.isLookup) {
      return null;
    }

    if (typeof value === 'string') {
      return this.convertStringToCellValue(value);
    }

    return null;
  }
}
