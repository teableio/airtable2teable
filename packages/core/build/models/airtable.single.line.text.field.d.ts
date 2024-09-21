import { ITextCellValueVo } from '../airtable-sdks';
import { ICreateFieldRo, ISingleLineTextCellValue } from '../teable-sdks';
import { AirtableFieldVo } from './airtable.field.vo';
export declare class AirtableSingleLineTextField extends AirtableFieldVo {
    transformTeableCreateRecordRo(value: ITextCellValueVo): ISingleLineTextCellValue;
    transformTeableCreateFieldRo(): ICreateFieldRo;
}
//# sourceMappingURL=airtable.single.line.text.field.d.ts.map