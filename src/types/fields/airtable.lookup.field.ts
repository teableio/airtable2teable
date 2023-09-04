import { AirtableFieldTypeEnum } from '../airtable.field.type.enum';
import { IAirtableField } from './airtable.field';
import { AirtableFieldOptions } from './airtable.field.options';

export interface IAirtableLookupField extends IAirtableField {
  type: AirtableFieldTypeEnum.Lookup;
  options: IAirtableLookupFieldOptions;
}
export interface IAirtableLookupFieldOptions {
  /**
   * The field in the linked table that this field is looking up.
   */
  fieldIdInLinkedTable: string | null;
  /**
   * Is the field currently valid (e.g. false if the linked record field has been deleted)
   */
  isValid: boolean;
  /**
   * The linked record field in the current table.
   */
  recordLinkFieldId: string | null;
  /**
   * The field type and options inside of the linked table. See other field type configs on this page for the possible values.
   * Can be null if invalid.
   */
  result: {
    type: AirtableFieldTypeEnum;
    options: AirtableFieldOptions;
  } | null;
}
