import { AirtableFieldTypeEnum } from './airtable.field.type.enum';
import { IAirtableField } from './fields/airtable.field';

export class AirtableField {
  constructor(private readonly field: IAirtableField) {}

  get id(): string {
    return this.field.id;
  }

  get name(): string {
    return this.field.name;
  }

  get type(): AirtableFieldTypeEnum {
    return this.field.type;
  }
}
