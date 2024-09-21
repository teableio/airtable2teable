import { ITextCellValueVo } from '../airtable-sdks';
import { ICreateFieldRo, IDateCellValue } from '../teable-sdks';
import { AirtableFieldVo } from './airtable.field.vo';
export declare class AirtableDateField extends AirtableFieldVo {
    transformTeableCreateRecordRo(value: ITextCellValueVo): IDateCellValue;
    transformTeableCreateFieldRo(): ICreateFieldRo;
}
//# sourceMappingURL=airtable.date.field.d.ts.map