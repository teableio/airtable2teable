import { AirtableFieldTypeEnum } from '../airtable.field.type.enum';
import { IAirtableDateFieldOptions } from './airtable.date.field';
import { IAirtableDateTimeFieldOptions } from './airtable.date.time.field';
import { IAirtableField } from './airtable.field';

export interface IAirtableCreatedTimeField extends IAirtableField {
  type: AirtableFieldTypeEnum.CreatedTime;
  options: IAirtableCreatedTimeFieldOptions;
}
export interface IAirtableCreatedTimeFieldOptions {
  /**
   * This will always be a date or dateTime field config.
   */
  result?: IAirtableDateTimeFieldOptions | IAirtableDateFieldOptions;
}
