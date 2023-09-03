import { AirtableFieldOption } from './airtable.field.option';
import { AirtableFieldTypeEnum } from './airtable.field.type.enum';

export class AirtableFieldModel {
  id: string;
  type?: AirtableFieldTypeEnum;
  name: string;
  description?: string;
  options?: AirtableFieldOption;
}
