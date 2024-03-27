import {
  AirtableCellState,
  AirtableCellTypeEnum,
  TeableFieldType,
} from 'types';
import { z } from 'zod';

import { IAiTextFieldOptionsVo } from '../airtable-sdks';
import { ICreateFieldRo } from '../teable-sdks';
import { AirtableFieldVo } from './airtable.field.vo';

export const aiTextCellValueSchema = z.object({
  state: z.nativeEnum(AirtableCellState),
  isStale: z.boolean(),
  errorType: z.string().optional(),
  value: z.string().nullable(),
});

export type IAiTextCellValueVo = z.infer<typeof aiTextCellValueSchema>;

export class AirtableAiTextField extends AirtableFieldVo {
  options?: IAiTextFieldOptionsVo;

  get cellType(): AirtableCellTypeEnum {
    return AirtableCellTypeEnum.OBJECT;
  }

  getApiCellValue(value: IAiTextCellValueVo) {
    return value.value;
  }

  transformTeableCreateFieldRo(): ICreateFieldRo {
    return {
      type: TeableFieldType.LongText,
      name: this.name,
      isLookup: false,
      description: this.description,
      options: {},
    };
  }
}
