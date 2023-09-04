import { AirtableFieldTypeEnum } from '../airtable.field.type.enum';
import { IAirtableField } from './airtable.field';

export interface IAirtableDateTimeField extends IAirtableField {
  type: AirtableFieldTypeEnum.DateTime;
  options: IAirtableDateTimeFieldOptions;
}

export interface IAirtableDateTimeFieldOptions {
  timeZone: string;
  dateFormat: {
    /**
     * format is always provided when reading. (l for local, LL for friendly, M/D/YYYY for us, D/M/YYYY for european, YYYY-MM-DD for iso)
     */
    format: 'l' | 'LL' | 'M/D/YYYY' | 'D/M/YYYY' | 'YYYY-MM-DD';
    name: 'local' | 'friendly' | 'us' | 'european' | 'iso';
  };
  timeFormat: {
    format: 'h:mma' | 'HH:mm';
    name: '12hour' | '24hour';
  };
}
