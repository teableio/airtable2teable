import { AirtableFieldTypeEnum } from '../airtable.field.type.enum';
import { IAirtableDateFieldOptions } from './airtable.date.field';
import { IAirtableDateTimeFieldOptions } from './airtable.date.time.field';
import { IAirtableField } from './airtable.field';

export interface IAirtableLastModifiedTimeField extends IAirtableField {
  type: AirtableFieldTypeEnum.LastModifiedTime;
  options: IAirtableLastModifiedTimeFieldOptions;
}
export interface IAirtableLastModifiedTimeFieldOptions {
  /**
   * False if this formula/field configuation has an error
   */
  isValid: boolean;
  /**
   * The fields to check the last modified time of
   */
  referencedFieldIds: string[] | null;
  /**
   * This will always be a date or dateTime field config.
   */
  result?: null | IAirtableDateTimeFieldOptions | IAirtableDateFieldOptions;
}
