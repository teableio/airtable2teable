import { ITextCellValueVo } from '../airtable-sdks';
import { ICreateFieldRo, ISingleLineTextCellValue } from '../teable-sdks';
import { AirtableFieldVo } from './airtable.field.vo';
export declare class AirtableRichTextField extends AirtableFieldVo {
    transformTeableCreateRecordRo(value: ITextCellValueVo): ISingleLineTextCellValue;
    transformTeableCreateFieldRo(): ICreateFieldRo;
}
//# sourceMappingURL=airtable.rich.text.field.d.ts.map