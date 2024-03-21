import { plainToInstance } from 'class-transformer';
import {
  AirtableCellTypeEnum,
  TeableCellValueType,
  TeableDbFieldType,
  TeableField,
  TeableFieldType,
} from 'types';
import { z } from 'zod';

import { IFieldRo } from '../teable-sdks';
import { AirtableFieldVo } from './airtable.field.vo';
import { TeableSingleLineTextField } from './teable.single.line.text.field';

export const barcodeCellValueSchema = z.object({
  type: z.string().nullable().optional(),
  text: z.string().optional(),
});

export type IBarcodeCellValueVo = z.infer<typeof barcodeCellValueSchema>;

export class AirtableBarcodeField extends AirtableFieldVo {
  get cellType(): AirtableCellTypeEnum {
    return AirtableCellTypeEnum.OBJECT;
  }

  getApiCellValue(value: IBarcodeCellValueVo) {
    return value.text;
  }

  transformDataModel(): TeableField {
    const json = {
      id: this.id,
      name: this.name,
      description: this.description,
      type: TeableFieldType.SingleLineText,
      dbFieldType: TeableDbFieldType.Text,
      options: {},
      cellValueType: TeableCellValueType.String,
      isComputed: false,
    };
    return plainToInstance(TeableSingleLineTextField, json);
  }

  transformTeableFieldCreateRo(): IFieldRo {
    return {
      type: TeableFieldType.SingleLineText,
      name: this.name,
      description: this.description,
      isLookup: false,
      options: {},
    };
  }
}
