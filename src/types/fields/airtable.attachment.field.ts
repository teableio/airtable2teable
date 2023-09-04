import { AirtableFieldTypeEnum } from '../airtable.field.type.enum';
import { IAirtableField } from './airtable.field';

export interface IAirtableAttachmentField extends IAirtableField {
  type: AirtableFieldTypeEnum.MultipleAttachments;
  options: IAirtableAttachmentFieldOptions;
}

export interface IAirtableAttachmentFieldOptions {
  /**
   * Whether attachments are rendered in the reverse order from the cell value in the Airtable UI (i.e. most recent first).
   *
   * You generally do not need to rely on this option.
   */
  isReversed: boolean;
}
