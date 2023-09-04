import { AirtableFieldTypeEnum } from '../airtable.field.type.enum';
import { IAirtableField } from './airtable.field';

export interface IAirtableRatingField extends IAirtableField {
  type: AirtableFieldTypeEnum.Rating;
  options: IAirtableRatingFieldOptions;
}

export interface IAirtableRatingFieldOptions {
  color:
    | 'yellowBright'
    | 'orangeBright'
    | 'redBright'
    | 'pinkBright'
    | 'purpleBright'
    | 'blueBright'
    | 'cyanBright'
    | 'tealBright'
    | 'greenBright'
    | 'grayBright';
  icon: 'star' | 'heart' | 'thumbsUp' | 'flag' | 'dot';
  max: number;
}
