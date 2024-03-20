import { z } from 'zod';

import {
  AirtableCellState,
  AirtableCellTypeEnum,
  AirtableField,
  IAirtableAiTextField,
} from '../types';

export const aiTextCellValueSchema = z.object({
  state: z.nativeEnum(AirtableCellState),
  isStale: z.boolean(),
  errorType: z.string().optional(),
  value: z.string().nullable(),
});

export type IAiTextCellValueVo = z.infer<typeof aiTextCellValueSchema>;

export class AirtableAiTextField extends AirtableField {
  constructor(field: IAirtableAiTextField) {
    super(field);
  }

  get cellType(): AirtableCellTypeEnum {
    return AirtableCellTypeEnum.OBJECT;
  }

  getApiCellValue(value: IAiTextCellValueVo) {
    return value.value;
  }
}
