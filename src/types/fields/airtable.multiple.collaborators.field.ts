import { AirtableFieldTypeEnum } from '../airtable.field.type.enum';
import { IAirtableField } from './airtable.field';
import { IEmptyAirtableFieldOptions } from './airtable.field.options';

export interface IAirtableMultipleCollaboratorsField extends IAirtableField {
  type: AirtableFieldTypeEnum.MultilineText;
  options: IEmptyAirtableFieldOptions;
}
