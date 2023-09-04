import { AirtableFieldTypeEnum } from '../airtable.field.type.enum';
import { IAirtableField } from './airtable.field';
import { AirtableFieldOptions } from './airtable.field.options';

export interface IAirtableFormulaField extends IAirtableField {
  type: AirtableFieldTypeEnum.Formula;
  options: IAirtableFormulaFieldOptions;
}

export interface IAirtableFormulaFieldOptions {
  /**
   * The formula including fields referenced by their IDs. For example, LEFT(4, {Birthday}) in the Airtable.com formula editor will be returned as LEFT(4, {fldXXX}) via API.
   */
  formula: string;
  /**
   * false if the formula contains an error.
   */
  isValid: boolean;
  /**
   * All fields in the record that are used in the formula.
   */
  referencedFieldIds: string[] | null;
  /**
   * The resulting field type and options returned by the formula. See other field type configs on this page for the possible values. Can be null if invalid.
   */
  result: {
    type: AirtableFieldTypeEnum;
    options: AirtableFieldOptions;
  } | null;
}
