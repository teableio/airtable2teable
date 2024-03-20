import { plainToInstance } from 'class-transformer';
import {
  AirtableCellTypeEnum,
  AirtableField,
  IAirtableSingleSelectField,
  TeableCellValueType,
  TeableDbFieldType,
  TeableField,
  TeableFieldType,
} from 'types';

import { IFieldRo } from '../teable-sdks';
import { TeableSingleSelectField } from './teable.single.select.field';

export class AirtableSingleSelectField extends AirtableField {
  constructor(field: IAirtableSingleSelectField) {
    super(field);
  }

  get cellType(): AirtableCellTypeEnum {
    return AirtableCellTypeEnum.STRING;
  }

  getApiCellValue(value: string) {
    return value;
  }

  transformDataModel(): TeableField {
    const json = {
      id: this.id,
      name: this.name,
      description: this.description,
      type: TeableFieldType.SingleSelect,
      dbFieldType: TeableDbFieldType.Text,
      options: {
        choices: this.field.options.choices || [],
      },
      cellValueType: TeableCellValueType.String,
      isMultipleCellValue: false,
      isComputed: false,
    };
    return plainToInstance(TeableSingleSelectField, json);
  }

  transformTeableFieldCreateRo(): IFieldRo {
    return {
      type: TeableFieldType.SingleSelect,
      name: this.name,
      description: this.description,
      isLookup: false,
      options: {
        choices:
          this.field.options?.choices?.map((choice) => {
            return {
              name: choice.name,
            };
          }) || [],
      },
    };
  }
}
