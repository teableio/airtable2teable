import { AirtableFieldTypeEnum } from '../airtable.field.type.enum';
import { AirtableFieldOptions } from './airtable.field.options';

export interface IAirtableField {
  id: string;
  type?: AirtableFieldTypeEnum;
  name: string;
  description?: string;
  options?: AirtableFieldOptions;
}
