import { AirtableFieldTypeEnum } from '../airtable.field.type.enum';
import { IAirtableField } from './airtable.field';

export interface IAirtableRichTextField extends IAirtableField {
  type: AirtableFieldTypeEnum.RichText;
}
