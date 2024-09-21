import { IAirtableTable } from '@/types';
import { IFormulaCellValueVo } from '../airtable-sdks';
import { ICreateFieldRo, IFormulaCellValue, ITableTableVo } from '../teable-sdks';
import { AirtableFieldVo } from './airtable.field.vo';
export declare class AirtableFormulaField extends AirtableFieldVo {
    transformTeableCreateRecordRo(value: IFormulaCellValueVo): IFormulaCellValue;
    transformTeableCreateFieldRo(tables: IAirtableTable[], newTables: ITableTableVo[]): ICreateFieldRo;
}
//# sourceMappingURL=airtable.formula.field.d.ts.map