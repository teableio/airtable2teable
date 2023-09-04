import { AirtableFieldTypeEnum } from '../airtable.field.type.enum';
import { IAirtableField } from './airtable.field';
import { AirtableFieldOptions } from './airtable.field.options';

export interface IAirtableRollupField extends IAirtableField {
  type: AirtableFieldTypeEnum.Rollup;
  options: IAirtableRollupFieldOptions;
}

export interface IAirtableRollupFieldOptions {
  /**
   * The field in the linked table that this field is looking up.
   */
  fieldIdInLinkedTable?: string;
  /**
   * The linked record field in the current table.
   */
  recordLinkFieldId?: string;
  /**
   * Is the field currently valid (e.g. false if the linked record field has been deleted)
   */
  isValid?: boolean;
  /**
   * The field type and options inside of the linked table. See other field type configs on this page for the possible values.
   * Can be null if invalid.
   */
  result?: {
    type: AirtableFieldTypeEnum;
    options: AirtableFieldOptions;
  } | null;
  /**
   * The ids of any fields referenced in the rollup formula
   */
  referencedFieldIds: string[];
}
