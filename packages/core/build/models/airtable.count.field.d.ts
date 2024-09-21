import { IAirtableTable } from '@/types';
import { INumberCellValueVo } from '../airtable-sdks';
import { ICreateFieldRo, INumberCellValue, ITableTableVo } from '../teable-sdks';
import { AirtableFieldVo } from './airtable.field.vo';
export declare class AirtableCountField extends AirtableFieldVo {
    transformTeableCreateRecordRo(value: INumberCellValueVo): INumberCellValue;
    transformTeableCreateFieldRo(tables: IAirtableTable[], newTables: ITableTableVo[]): ICreateFieldRo;
}
//# sourceMappingURL=airtable.count.field.d.ts.map