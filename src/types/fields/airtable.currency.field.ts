import { AirtableFieldTypeEnum } from '../airtable.field.type.enum';
import { IAirtableField } from './airtable.field';

export interface IAirtableCurrencyField extends IAirtableField {
  type: AirtableFieldTypeEnum.Currency;
  options: IAirtableCurrencyFieldOptions;
}

export interface IAirtableCurrencyFieldOptions {
  /**
   * Indicates the number of digits shown to the right of the decimal point for this field. (0-7 inclusive)
   */
  precision: number;
  /**
   * Currency symbol to use.
   */
  symbol: string;
}
