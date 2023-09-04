import { AirtableFieldTypeEnum } from '../airtable.field.type.enum';
import { IAirtableField } from './airtable.field';
import { IEmptyAirtableFieldOptions } from './airtable.field.options';

export interface IAirtableEmailField extends IAirtableField {
  type: AirtableFieldTypeEnum.Email;
  options: IEmptyAirtableFieldOptions;
}
