import { plainToInstance } from 'class-transformer';
import {
  AirtableFieldTypeEnum,
  TeableCellValueType,
  TeableDbFieldType,
  TeableField,
  TeableFieldType,
} from 'types';

import { IAirtableFieldVo, IFieldOptionsVoSchema } from '../airtable-sdks';
import { TeableSingleLineTextField } from '../models';
import { IFieldRo } from '../teable-sdks';

export abstract class AirtableFieldVo implements IAirtableFieldVo {
  id!: string;

  name!: string;

  type!: AirtableFieldTypeEnum;

  description?: string;

  options?: IFieldOptionsVoSchema;

  abstract getApiCellValue(value: unknown, ...others: unknown[]): unknown;

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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  transformTeableFieldCreateRo(...others: unknown[]): IFieldRo {
    return {
      type: TeableFieldType.SingleLineText,
      name: this.name,
      description: this.description,
      isLookup: false,
      options: {},
    };
  }
}
