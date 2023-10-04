import { plainToInstance } from 'class-transformer';
import {
  AirtableCellTypeEnum,
  AirtableField,
  IAirtableCreatedTimeField,
  TeableCellValueType,
  TeableDbFieldType,
  TeableField,
  TeableFieldType,
} from 'types';

import {
  DateFormattingPreset,
  TeableDateField,
  TimeFormatting,
} from './teable.date.field';

export class AirtableCreatedTimeField extends AirtableField {
  constructor(field: IAirtableCreatedTimeField) {
    super(field);
  }

  get cellType(): AirtableCellTypeEnum {
    return AirtableCellTypeEnum.STRING;
  }

  getTeableCellValue(value: any): string {
    return value;
  }

  transformDataModel(): TeableField {
    const json = {
      id: this.id,
      name: this.name,
      description: this.description,
      type: TeableFieldType.Date,
      dbFieldType: TeableDbFieldType.DateTime,
      options: {
        formatting: {
          date: DateFormattingPreset.ISO,
          time: this.field.options.timeFormat
            ? this.field.options.timeFormat.name === '12hour'
              ? TimeFormatting.Hour12
              : TimeFormatting.Hour24
            : TimeFormatting.None,
          timeZone:
            this.field.options.timeZone &&
            this.field.options.timeZone === 'client'
              ? this.field.options.timeZone
              : 'Etc/GMT',
        },
        defaultValue: 'now',
      },
      cellValueType: TeableCellValueType.DateTime,
      isComputed: false,
    };
    return plainToInstance(TeableDateField, json);
  }
}
