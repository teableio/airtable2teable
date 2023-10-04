import { plainToInstance } from 'class-transformer';

import { TeableSingleLineTextField } from '../models';
import { AirtableFieldTypeEnum } from './airtable.field.type.enum';
import { IAirtableField } from './fields';
import { TeableCellValueType } from './teable.cell.value.type';
import { TeableDbFieldType } from './teable.db.field.type';
import { TeableField } from './teable.field';
import { TeableFieldType } from './teable.field.type.enum';

export abstract class AirtableField {
  protected constructor(protected readonly field: IAirtableField) {}

  get id(): string {
    return this.field.id;
  }

  get name(): string {
    return this.field.name;
  }

  get type(): AirtableFieldTypeEnum {
    return this.field.type;
  }

  get description(): string {
    return this.field.description;
  }

  abstract getTeableCellValue(value: unknown): string | Date | boolean | number;

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
