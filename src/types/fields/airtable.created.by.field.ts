import { AirtableFieldTypeEnum } from '../airtable.field.type.enum';
import { IAirtableField } from './airtable.field';
import { IEmptyAirtableFieldOptions } from './airtable.field.options';

export interface IAirtableCreatedByField extends IAirtableField {
  type: AirtableFieldTypeEnum.CreatedBy;
  options: IEmptyAirtableFieldOptions;
}
