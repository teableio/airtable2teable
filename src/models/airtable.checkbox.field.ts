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
import { TeableCheckboxField } from './teable.checkbox.field';

export const checkboxCellValueSchema = z.boolean().nullable();

export type ICheckboxCellValueVo = z.infer<typeof checkboxCellValueSchema>;

export class AirtableCheckboxField extends AirtableFieldVo {
  get cellType(): AirtableCellTypeEnum {
    return AirtableCellTypeEnum.TRUE;
  }
  getApiCellValue(value: ICheckboxCellValueVo) {
    return value;
  }

  transformDataModel(): TeableField {
    const json = {
      id: this.id,
      name: this.name,
      description: this.description,
      type: TeableFieldType.Checkbox,
      dbFieldType: TeableDbFieldType.Integer,
      options: {},
      cellValueType: TeableCellValueType.Boolean,
      isComputed: false,
    };
    return plainToInstance(TeableCheckboxField, json);
  }

  transformTeableFieldCreateRo(): IFieldRo {
    return {
      type: TeableFieldType.Checkbox,
      name: this.name,
      description: this.description,
      isLookup: false,
      options: {},
    };
  }
}
