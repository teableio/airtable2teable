import { AirtableFieldTypeEnum } from '../airtable.field.type.enum';
import { IAirtableField } from './airtable.field';
import { IEmptyAirtableFieldOptions } from './airtable.field.options';

export interface IAirtableRichTextField extends IAirtableField {
  type: AirtableFieldTypeEnum.RichText;
  options: IEmptyAirtableFieldOptions;
}
