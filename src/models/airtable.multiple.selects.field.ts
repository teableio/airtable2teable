import { plainToInstance } from 'class-transformer';
import {
  AirtableCellTypeEnum,
  TeableCellValueType,
  TeableDbFieldType,
  TeableField,
  TeableFieldType,
} from 'types';

import { IFieldRo } from '../teable-sdks';
import { AirtableFieldVo } from './airtable.field.vo';
import { TeableMultipleSelectField } from './teable.multiple.select.field';

export class AirtableMultipleSelectsField extends AirtableFieldVo {
  get cellType(): AirtableCellTypeEnum {
    return AirtableCellTypeEnum.ARRAY;
  }

  getTeableDBCellValue(value: unknown): string {
    return `'${String(value)}'`;
  }

  getApiCellValue(value: string[]): string[] {
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
        choices: this.options.choices || [],
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
        choices: this.options?.choices || [],
      },
    };
  }
}
