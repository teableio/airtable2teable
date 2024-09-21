import { INumberCellValueVo } from '../airtable-sdks';
import { ICreateFieldRo, INumberCellValue } from '../teable-sdks';
import { AirtableFieldVo } from './airtable.field.vo';
export declare class AirtableCurrencyField extends AirtableFieldVo {
    transformTeableCreateRecordRo(value: INumberCellValueVo): INumberCellValue;
    transformTeableCreateFieldRo(): ICreateFieldRo;
}
//# sourceMappingURL=airtable.currency.field.d.ts.map