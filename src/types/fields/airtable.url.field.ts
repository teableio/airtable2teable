import { AirtableFieldTypeEnum } from '../airtable.field.type.enum';
import { IAirtableField } from './airtable.field';

export interface IAirtableUrlField extends IAirtableField {
  type: AirtableFieldTypeEnum.Url;
}
