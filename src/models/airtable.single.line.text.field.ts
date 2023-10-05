import { plainToInstance } from 'class-transformer';
import {
  AirtableCellTypeEnum,
  AirtableField,
  IAirtableSingleLineTextField,
  TeableCellValueType,
  TeableDbFieldType,
  TeableField,
  TeableFieldType,
} from 'types';

import { TeableSingleLineTextField } from './teable.single.line.text.field';

export class AirtableSingleLineTextField extends AirtableField {
  constructor(field: IAirtableSingleLineTextField) {
    super(field);
  }

  get cellType(): AirtableCellTypeEnum {
    return AirtableCellTypeEnum.STRING;
  }

  getTeableDBCellValue(value: unknown): string {
    return `'${value}'`;
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
}
