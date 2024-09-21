import { ITextCellValueVo } from '../airtable-sdks';
import { ICreateFieldRo, ISingleLineTextCellValue } from '../teable-sdks';
import { AirtableFieldVo } from './airtable.field.vo';
export declare class AirtableSingleSelectField extends AirtableFieldVo {
    transformTeableCreateRecordRo(value: ITextCellValueVo): ISingleLineTextCellValue;
    transformTeableCreateFieldRo(): ICreateFieldRo;
}
//# sourceMappingURL=airtable.single.select.field.d.ts.map