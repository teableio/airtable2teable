import { AirtableFieldTypeEnum } from '../airtable.field.type.enum';
import { IAirtableField } from './airtable.field';
export interface IAirtableCountField extends IAirtableField {
  type: AirtableFieldTypeEnum.Count;
  options: IAirtableCountFieldOptions;
}
export interface IAirtableCountFieldOptions {
  /**
   * false when recordLinkFieldId is null, e.g. the referenced column was deleted.
   */
  isValid: boolean;
  /**
   *
   */
  recordLinkFieldId?: string | null;
}
