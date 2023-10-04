import { plainToInstance } from 'class-transformer';
import * as _ from 'lodash';
import {
  AirtableCellTypeEnum,
  AirtableField,
  IAirtableSingleSelectField,
  TeableCellValueType,
  TeableDbFieldType,
  TeableField,
  TeableFieldType,
} from 'types';

import { TeableSingleSelectField } from './teable.single.select.field';

export class AirtableSingleSelectField extends AirtableField {
  constructor(field: IAirtableSingleSelectField) {
    super(field);
  }

  get cellType(): AirtableCellTypeEnum {
    return AirtableCellTypeEnum.STRING;
  }

  getTeableDBCellValue(value: unknown): string {
    const values: string[] = (value as any[]).map((v) => {
      if (_.isString(v)) {
        return v;
      }
      return v.name;
    });
    return String(values);
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
}
