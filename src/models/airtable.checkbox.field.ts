import { plainToInstance } from 'class-transformer';
import {
  AirtableCellTypeEnum,
  AirtableField,
  IAirtableCheckboxField,
  TeableCellValueType,
  TeableDbFieldType,
  TeableField,
  TeableFieldType,
} from 'types';

import { TeableCheckboxField } from './teable.checkbox.field';

export class AirtableCheckboxField extends AirtableField {
  constructor(field: IAirtableCheckboxField) {
    super(field);
  }

  get cellType(): AirtableCellTypeEnum {
    return AirtableCellTypeEnum.TRUE;
  }

  getTeableCellValue(value: unknown): boolean {
    return value as boolean | null;
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
}
