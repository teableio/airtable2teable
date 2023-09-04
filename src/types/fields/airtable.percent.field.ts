import { AirtableFieldTypeEnum } from '../airtable.field.type.enum';
import { IAirtableField } from './airtable.field';

export interface IAirtablePercentField extends IAirtableField {
  type: AirtableFieldTypeEnum.Percent;
  options: IAirtablePercentFieldOptions;
}

export interface IAirtablePercentFieldOptions {
  /**
   * Indicates the number of digits shown to the right of the decimal point for this field. (0-8 inclusive)
   */
  precision: number;
}
