import { IAirtableTable } from '@/types';
import { ILinkCellValueVo } from '../airtable-sdks';
import { ICreateFieldRo, ILinkCellValue, ITableTableVo } from '../teable-sdks';
import { AirtableFieldVo } from './airtable.field.vo';
export declare class AirtableLinkField extends AirtableFieldVo {
    transformTeableCreateRecordRo(value: ILinkCellValueVo): ILinkCellValue[] | ILinkCellValue;
    transformTeableCreateFieldRo(tables: IAirtableTable[], newTables: ITableTableVo[]): ICreateFieldRo;
}
//# sourceMappingURL=airtable.link.field.d.ts.map