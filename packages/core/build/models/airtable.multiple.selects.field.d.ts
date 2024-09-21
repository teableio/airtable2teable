import { ITextCellValueVo } from '../airtable-sdks';
import { ICreateFieldRo, IMultipleSelectCellValue } from '../teable-sdks';
import { AirtableFieldVo } from './airtable.field.vo';
export declare class AirtableMultipleSelectsField extends AirtableFieldVo {
    transformTeableCreateRecordRo(value: ITextCellValueVo[]): IMultipleSelectCellValue;
    transformTeableCreateFieldRo(): ICreateFieldRo;
}
//# sourceMappingURL=airtable.multiple.selects.field.d.ts.map