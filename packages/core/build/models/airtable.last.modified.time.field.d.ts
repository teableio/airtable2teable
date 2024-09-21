import { ITextCellValueVo } from '../airtable-sdks';
import { ICreateFieldRo, IDateCellValue } from '../teable-sdks';
import { AirtableFieldVo } from './airtable.field.vo';
export declare class AirtableLastModifiedTimeField extends AirtableFieldVo {
    transformTeableCreateRecordRo(value: ITextCellValueVo): IDateCellValue;
    transformTeableCreateFieldRo(): ICreateFieldRo;
}
//# sourceMappingURL=airtable.last.modified.time.field.d.ts.map