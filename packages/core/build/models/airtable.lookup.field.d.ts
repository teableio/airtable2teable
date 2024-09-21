import { ICreateFieldRo, IFieldCellValueVo, ITableTableVo } from '@/teable-sdks';
import { IAirtableTable } from '@/types';
import { ILookupCellValueVo } from '../airtable-sdks';
import { AirtableFieldVo } from './airtable.field.vo';
export declare class AirtableLookupField extends AirtableFieldVo {
    transformTeableCreateRecordRo(value: ILookupCellValueVo): IFieldCellValueVo;
    transformTeableCreateFieldRo(tables: IAirtableTable[], newTables: ITableTableVo[]): ICreateFieldRo;
}
//# sourceMappingURL=airtable.lookup.field.d.ts.map