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

import { IFieldRo } from '../teable-sdks';
import { TeableCheckboxField } from './teable.checkbox.field';

export class AirtableCheckboxField extends AirtableField {
  constructor(field: IAirtableCheckboxField) {
    super(field);
  }

  get cellType(): AirtableCellTypeEnum {
    return AirtableCellTypeEnum.TRUE;
  }

  getTeableDBCellValue(value: unknown): boolean {
    return !!(value as boolean);
  }

  getApiCellValue(value: any): boolean {
    return !!(value as boolean);
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
