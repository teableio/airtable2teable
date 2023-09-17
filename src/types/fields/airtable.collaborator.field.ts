import { AirtableFieldTypeEnum } from '../airtable.field.type.enum';
import { IAirtableField } from './airtable.field';
import { IEmptyAirtableFieldOptions } from './airtable.field.options';

export interface IAirtableCollaboratorField extends IAirtableField {
  type: AirtableFieldTypeEnum.SingleCollaborator;
  options: IEmptyAirtableFieldOptions;
}
