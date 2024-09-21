import { INumberCellValueVo } from '../airtable-sdks';
import { ICreateFieldRo, INumberCellValue } from '../teable-sdks';
import { AirtableFieldVo } from './airtable.field.vo';
export declare class AirtablePercentField extends AirtableFieldVo {
    transformTeableCreateRecordRo(value: INumberCellValueVo): INumberCellValue;
    transformTeableCreateFieldRo(): ICreateFieldRo;
}
//# sourceMappingURL=airtable.percent.field.d.ts.map