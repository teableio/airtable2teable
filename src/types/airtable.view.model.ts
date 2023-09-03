import { AirtableViewTypeEnum } from './airtable.view.type.enum';

export class AirtableViewModel {
  id: string;
  type: AirtableViewTypeEnum;
  name: string;
  /**
   * Available on grid views only: list of visible (non-hidden) field IDs, when requested with include query paremeter
   */
  visibleFieldIds?: string[];
}
