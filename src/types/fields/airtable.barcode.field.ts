import { AirtableFieldTypeEnum } from '../airtable.field.type.enum';
import { IAirtableField } from './airtable.field';
import { IEmptyAirtableFieldOptions } from './airtable.field.options';

export interface IAirtableBarcodeField extends IAirtableField {
  type: AirtableFieldTypeEnum.Barcode;
  options: IEmptyAirtableFieldOptions;
}
