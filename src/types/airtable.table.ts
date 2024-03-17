import { IAirtableView } from './airtable.view';
import { IAirtableField } from './fields';

export interface IAirtableTable {
  baseId: string;
  id: string;
  /**
   * The first column in the table and every view.
   */
  primaryFieldId: string;
  name: string;
  description?: string;
  fields: IAirtableField[];
  views: IAirtableView[];
}
