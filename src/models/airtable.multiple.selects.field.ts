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

import { TeableMultipleSelectField } from './teable.multiple.select.field';

export class AirtableMultipleSelectsField extends AirtableField {
  constructor(field: IAirtableMultipleSelectsField) {
    super(field);
  }

  get cellType(): AirtableCellTypeEnum {
    return AirtableCellTypeEnum.ARRAY;
  }

  getCellValue(value: any): string[] {
    return value;
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
}
