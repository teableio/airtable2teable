import { AirtableFieldTypeEnum } from '../airtable.field.type.enum';
import { IAirtableField } from './airtable.field';

export interface IAirtableMultipleCollaboratorsField extends IAirtableField {
  type: AirtableFieldTypeEnum.MultilineText;
}
