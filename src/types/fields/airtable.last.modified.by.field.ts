import { AirtableFieldTypeEnum } from '../airtable.field.type.enum';
import { IAirtableField } from './airtable.field';
import { IEmptyAirtableFieldOptions } from './airtable.field.options';

export interface IAirtableLastModifiedByField extends IAirtableField {
  type: AirtableFieldTypeEnum.LastModifiedBy;
  options: IEmptyAirtableFieldOptions;
}
