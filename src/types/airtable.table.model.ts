import { AirtableFieldModel } from './airtable.field.model';
import { AirtableViewModel } from './airtable.view.model';

export class AirtableTableModel {
  id: string;
  /**
   * The first column in the table and every view.
   */
  primaryFieldId: string;
  name: string;
  description?: string;
  fields: AirtableFieldModel[];
  views: AirtableViewModel[];
}
