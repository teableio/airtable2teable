import { AirtableFieldTypeEnum } from '../airtable.field.type.enum';
import { IAirtableField } from './airtable.field';

export interface IAirtableLinkField extends IAirtableField {
  type: AirtableFieldTypeEnum.MultipleRecordLinks;
  options: IAirtableLinkFieldOptions;
}
export interface IAirtableLinkFieldOptions {
  /**
   * Whether linked records are rendered in the reverse order from the cell value in the Airtable UI (i.e. most recent first).
   *
   * You generally do not need to rely on this option.
   */
  isReversed: boolean;
  /**
   * The ID of the table this field links to
   */
  linkedTableId: string;
  /**
   * Whether this field prefers to only have a single linked record. While this preference is enforced in the Airtable UI,
   * it is possible for a field that prefers single linked records to have multiple record links (for example, via copy-and-paste or programmatic updates).
   */
  prefersSingleRecordLink: boolean;
  /**
   * The ID of the field in the linked table that links back to this one
   */
  inverseLinkFieldId?: string;
  /**
   * The ID of the view in the linked table to use when showing a list of records to select from.
   */
  viewIdForRecordSelection?: string;
}
