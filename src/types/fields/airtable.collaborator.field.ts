import { AirtableFieldTypeEnum } from '../airtable.field.type.enum';
import { IAirtableField } from './airtable.field';
export interface IAirtableCollaboratorField extends IAirtableField {
  type: AirtableFieldTypeEnum.SingleCollaborator;
}
