import { IAirtableFieldVo, IAirtableViewVo } from '../airtable-sdks';
export interface IAirtableTable {
    baseId: string;
    id: string;
    primaryFieldId: string;
    name: string;
    description?: string;
    fields: (IAirtableFieldVo & {
        tableId: string;
    })[];
    views: IAirtableViewVo[];
}
//# sourceMappingURL=airtable.table.d.ts.map