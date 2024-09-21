import { INumberCellValueVo } from '../airtable-sdks';
import { ICreateFieldRo, INumberCellValue } from '../teable-sdks';
import { AirtableFieldVo } from './airtable.field.vo';
export declare class AirtableAutoNumberField extends AirtableFieldVo {
    transformTeableCreateRecordRo(value: INumberCellValueVo): INumberCellValue;
    transformTeableCreateFieldRo(): ICreateFieldRo;
}
//# sourceMappingURL=airtable.auto.number.field.d.ts.map