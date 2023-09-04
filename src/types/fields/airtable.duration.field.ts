import { AirtableFieldTypeEnum } from '../airtable.field.type.enum';
import { IAirtableField } from './airtable.field';

export interface IAirtableDurationField extends IAirtableField {
  type: AirtableFieldTypeEnum.Duration;
  options: IAirtableDurationFieldOptions;
}

export interface IAirtableDurationFieldOptions {
  durationFormat:
    | 'h:mm'
    | 'h:mm:ss'
    | 'h:mm:ss.S'
    | 'h:mm:ss.SS'
    | 'h:mm:ss.SSS';
}
