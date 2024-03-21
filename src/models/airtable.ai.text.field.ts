import { AirtableCellState, AirtableCellTypeEnum } from 'types';
import { z } from 'zod';

import { AirtableFieldVo } from './airtable.field.vo';

export const aiTextCellValueSchema = z.object({
  state: z.nativeEnum(AirtableCellState),
  isStale: z.boolean(),
  errorType: z.string().optional(),
  value: z.string().nullable(),
});

export type IAiTextCellValueVo = z.infer<typeof aiTextCellValueSchema>;

export class AirtableAiTextField extends AirtableFieldVo {
  get cellType(): AirtableCellTypeEnum {
    return AirtableCellTypeEnum.OBJECT;
  }

  getApiCellValue(value: IAiTextCellValueVo) {
    return value.value;
  }
}
