import { AirtableFieldTypeEnum } from '../airtable.field.type.enum';
import { IAirtableField } from './airtable.field';
import { IEmptyAirtableFieldOptions } from './airtable.field.options';

export interface IAirtableUrlField extends IAirtableField {
  type: AirtableFieldTypeEnum.Url;
  options: IEmptyAirtableFieldOptions;
}
