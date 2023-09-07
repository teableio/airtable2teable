import { AirtableViewModel } from './airtable.view.model';
import { IAirtableField } from './fields';

export interface IAirtableTableModel {
  id: string;
  /**
   * The first column in the table and every view.
   */
  primaryFieldId: string;
  name: string;
  description?: string;
  fields: IAirtableField[];
  views: AirtableViewModel[];
}
