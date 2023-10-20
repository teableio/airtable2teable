import { AirtableFieldTypeEnum } from '../airtable.field.type.enum';
import { IAirtableField } from './airtable.field';

export interface IAirtableAiTextField extends IAirtableField {
  type: AirtableFieldTypeEnum.AiText;
  options: IAirtableAiTextFieldOptions;
}

export interface IAirtableAiTextFieldOptions {
  /**
   * The prompt that is used to generate the results in the AI field, additional object schemas may be added in the future. Currently, this is an array of strings or objects that identify any fields interpolated into the prompt.
   *
   * The prompt will not currently be provided if this field config is within another fields configuration (like a lookup field)
   */
  prompt?: (
    | string
    | {
        field: {
          fieldId: string;
        };
      }
  )[];
  /**
   * The other fields in the record that are used in the ai field
   *
   * The referencedFieldIds will not currently be provided if this field config is within another fields configuration (like a lookup field)
   */
  referencedFieldIds?: string[];
}
