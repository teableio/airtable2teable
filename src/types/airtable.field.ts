import { plainToInstance } from 'class-transformer';

import { TeableSingleLineTextField } from '../models';
import { IFieldRo } from '../teable-sdks';
import { AirtableFieldTypeEnum } from './airtable.field.type.enum';
import { AirtableFieldOptions, IAirtableField } from './fields';
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

  get options(): AirtableFieldOptions {
    return this.field.options;
  }

  abstract getTeableDBCellValue(
    value: unknown,
  ): string | Date | boolean | number | null;

  abstract getApiCellValue(
    value: unknown,
  ): string | number | boolean | object | string[] | object[] | null;

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
