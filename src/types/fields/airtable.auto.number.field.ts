import { AirtableFieldTypeEnum } from '../airtable.field.type.enum';
import { IAirtableField } from './airtable.field';
import { IEmptyAirtableFieldOptions } from './airtable.field.options';

export interface IAirtableAutoNumberField extends IAirtableField {
  type: AirtableFieldTypeEnum.AutoNumber;
  options: IEmptyAirtableFieldOptions;
}
