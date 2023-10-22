import { plainToInstance } from 'class-transformer';
import {
  AirtableCellTypeEnum,
  AirtableField,
  IAirtableMultipleSelectsField,
  TeableCellValueType,
  TeableDbFieldType,
  TeableField,
  TeableFieldType,
} from 'types';

import { IFieldRo } from '../teable-sdks';
import { TeableMultipleSelectField } from './teable.multiple.select.field';

export class AirtableMultipleSelectsField extends AirtableField {
  constructor(field: IAirtableMultipleSelectsField) {
    super(field);
  }

  get cellType(): AirtableCellTypeEnum {
    return AirtableCellTypeEnum.ARRAY;
  }

  getTeableDBCellValue(value: unknown): string {
    return `'${String(value)}'`;
  }

  getApiCellValue(value: unknown): string[] {
    return value as string[];
  }

  transformDataModel(): TeableField {
    const json = {
      id: this.id,
      name: this.name,
      description: this.description,
      type: TeableFieldType.MultipleSelect,
      dbFieldType: TeableDbFieldType.Json,
      options: {
        choices: this.field.options.choices || [],
      },
      cellValueType: TeableCellValueType.String,
      isMultipleCellValue: true,
      isComputed: false,
    };
    return plainToInstance(TeableMultipleSelectField, json);
  }

  transformTeableFieldCreateRo(): IFieldRo {
    return {
      type: TeableFieldType.MultipleSelect,
      name: this.name,
      description: this.description,
      isLookup: false,
      options: {
        choices: this.field.options?.choices || [],
      },
    };
  }
}
