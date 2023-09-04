import { AirtableFieldTypeEnum } from '../airtable.field.type.enum';
import { IAirtableField } from './airtable.field';

export interface IAirtableMultipleSelectsField extends IAirtableField {
  type: AirtableFieldTypeEnum.MultipleSelects;
  options: IAirtableMultipleSelectsFieldOptions;
}
export interface IAirtableMultipleSelectsFieldOptions {
  choices: {
    id: string;
    color?:
      | 'blueLight2'
      | 'cyanLight2'
      | 'tealLight2'
      | 'greenLight2'
      | 'yellowLight2'
      | 'orangeLight2'
      | 'redLight2'
      | 'pinkLight2'
      | 'purpleLight2'
      | 'grayLight2'
      | 'blueLight1'
      | 'cyanLight1'
      | 'tealLight1'
      | 'greenLight1'
      | 'yellowLight1'
      | 'orangeLight1'
      | 'redLight1'
      | 'pinkLight1'
      | 'purpleLight1'
      | 'grayLight1'
      | 'blueBright'
      | 'cyanBright'
      | 'tealBright'
      | 'greenBright'
      | 'yellowBright'
      | 'orangeBright'
      | 'redBright'
      | 'pinkBright'
      | 'purpleBright'
      | 'grayBright'
      | 'blueDark1'
      | 'cyanDark1'
      | 'tealDark1'
      | 'greenDark1'
      | 'yellowDark1'
      | 'orangeDark1'
      | 'redDark1'
      | 'pinkDark1'
      | 'purpleDark1'
      | 'grayDark1';
    name: string;
  }[];
}
