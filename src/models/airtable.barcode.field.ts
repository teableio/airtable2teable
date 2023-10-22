import { plainToInstance } from 'class-transformer';
import {
  AirtableCellTypeEnum,
  AirtableField,
  IAirtableBarcodeField,
  TeableCellValueType,
  TeableDbFieldType,
  TeableField,
  TeableFieldType,
} from 'types';

import { IFieldRo } from '../teable-sdks';
import { TeableSingleLineTextField } from './teable.single.line.text.field';

export class AirtableBarcodeField extends AirtableField {
  constructor(field: IAirtableBarcodeField) {
    super(field);
  }

  get cellType(): AirtableCellTypeEnum {
    return AirtableCellTypeEnum.STRING;
  }

  getTeableDBCellValue(value: unknown): string {
    return `'${
      (
        value as {
          type?: string;
          text: string;
        }
      ).text
    }'`;
  }

  getApiCellValue(value: any): string {
    return (
      value as {
        type?: string;
        text: string;
      }
    )?.text;
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
