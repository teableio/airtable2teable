import { AirtableFieldTypeEnum } from '../airtable.field.type.enum';
import { IAirtableField } from './airtable.field';
import { IEmptyAirtableFieldOptions } from './airtable.field.options';

export interface IAirtableButtonField extends IAirtableField {
  type: AirtableFieldTypeEnum.Button;
  options: IEmptyAirtableFieldOptions;
}
