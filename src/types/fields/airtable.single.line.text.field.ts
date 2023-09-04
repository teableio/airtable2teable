import { AirtableFieldTypeEnum } from '../airtable.field.type.enum';
import { IAirtableField } from './airtable.field';

export interface IAirtableSingleLineTextField extends IAirtableField {
  type: AirtableFieldTypeEnum.SingleLineText;
}
