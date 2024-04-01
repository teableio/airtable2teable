import { IAirtableFieldVo, IAirtableViewVo } from '../airtable-sdks';

export interface IAirtableTable {
  baseId: string;
  id: string;
  /**
   * The first column in the table and every view.
   */
  primaryFieldId: string;
  name: string;
  description?: string;
  fields: (IAirtableFieldVo & { tableId: string })[];
  views: IAirtableViewVo[];
}
