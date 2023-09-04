import { AirtableFieldTypeEnum } from '../airtable.field.type.enum';
import { IAirtableField } from './airtable.field';

export interface IAirtablePhoneField extends IAirtableField {
  type: AirtableFieldTypeEnum.PhoneNumber;
}
