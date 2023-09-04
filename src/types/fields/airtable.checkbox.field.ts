import { AirtableFieldTypeEnum } from '../airtable.field.type.enum';
import { IAirtableField } from './airtable.field';

export interface IAirtableCheckboxField extends IAirtableField {
  type: AirtableFieldTypeEnum.Checkbox;
  options: IAirtableCheckboxFieldOptions;
}

export interface IAirtableCheckboxFieldOptions {
  /**
   * The color of the checkbox.
   *
   * Potential colors: 'yellowBright' | 'orangeBright' | 'redBright' | 'pinkBright' | 'purpleBright' | 'blueBright' | 'cyanBright' | 'tealBright' | 'greenBright' | 'grayBright'
   */
  color: string;
  /**
   * An icon name.
   */
  icon: 'check' | 'xCheckbox' | 'star' | 'heart' | 'thumbsUp' | 'flag' | 'dot';
}
