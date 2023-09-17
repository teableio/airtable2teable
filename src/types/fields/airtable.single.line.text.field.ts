import { AirtableFieldTypeEnum } from '../airtable.field.type.enum';
import { IAirtableField } from './airtable.field';
import { IEmptyAirtableFieldOptions } from './airtable.field.options';

export interface IAirtableSingleLineTextField extends IAirtableField {
  type: AirtableFieldTypeEnum.SingleLineText;
  options: IEmptyAirtableFieldOptions;
}
