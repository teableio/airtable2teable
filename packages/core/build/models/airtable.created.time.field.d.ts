import { ITextCellValueVo } from '../airtable-sdks';
import { ICreateFieldRo, IDateCellValue } from '../teable-sdks';
import { AirtableFieldVo } from './airtable.field.vo';
export declare class AirtableCreatedTimeField extends AirtableFieldVo {
    transformTeableCreateRecordRo(value: ITextCellValueVo): IDateCellValue;
    transformTeableCreateFieldRo(): ICreateFieldRo;
}
//# sourceMappingURL=airtable.created.time.field.d.ts.map