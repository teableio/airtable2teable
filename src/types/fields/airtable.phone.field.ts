import { AirtableFieldTypeEnum } from '../airtable.field.type.enum';
import { IAirtableField } from './airtable.field';
import { IEmptyAirtableFieldOptions } from './airtable.field.options';

export interface IAirtablePhoneField extends IAirtableField {
  type: AirtableFieldTypeEnum.PhoneNumber;
  options: IEmptyAirtableFieldOptions;
}
