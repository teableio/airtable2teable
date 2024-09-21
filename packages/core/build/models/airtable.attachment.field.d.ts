import { IAttachmentCellValueVo } from '../airtable-sdks';
import { IAttachmentCellValue, ICreateFieldRo } from '../teable-sdks';
import { AirtableFieldVo } from './airtable.field.vo';
export declare class AirtableAttachmentField extends AirtableFieldVo {
    transformTeableCreateRecordRo(value: IAttachmentCellValueVo): IAttachmentCellValue;
    transformTeableCreateFieldRo(): ICreateFieldRo;
}
//# sourceMappingURL=airtable.attachment.field.d.ts.map