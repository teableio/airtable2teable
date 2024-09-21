import { ICheckboxCellValueVo } from '../airtable-sdks';
import { ICheckboxCellValue, ICreateFieldRo } from '../teable-sdks';
import { AirtableFieldVo } from './airtable.field.vo';
export declare class AirtableCheckboxField extends AirtableFieldVo {
    transformTeableCreateRecordRo(value: ICheckboxCellValueVo): ICheckboxCellValue;
    transformTeableCreateFieldRo(): ICreateFieldRo;
}
//# sourceMappingURL=airtable.checkbox.field.d.ts.map