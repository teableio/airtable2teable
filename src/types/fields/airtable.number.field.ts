import { AirtableFieldTypeEnum } from '../airtable.field.type.enum';
import { IAirtableField } from './airtable.field';

export interface IAirtableNumberField extends IAirtableField {
  type: AirtableFieldTypeEnum.Number;
  options: IAirtableNumberFieldOptions;
}
export interface IAirtableNumberFieldOptions {
  /**
   * Indicates the number of digits shown to the right of the decimal point for this field. (0-8 inclusive)
   */
  precision: number;
}
