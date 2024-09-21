import { INumberCellValueVo } from '../airtable-sdks';
import { ICreateFieldRo, INumberCellValue } from '../teable-sdks';
import { AirtableFieldVo } from './airtable.field.vo';
export declare class AirtableDurationField extends AirtableFieldVo {
    transformTeableCreateRecordRo(value: INumberCellValueVo): INumberCellValue;
    transformTeableCreateFieldRo(): ICreateFieldRo;
}
//# sourceMappingURL=airtable.duration.field.d.ts.map