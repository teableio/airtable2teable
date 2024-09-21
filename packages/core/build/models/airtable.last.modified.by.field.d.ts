import { ICollaboratorCellValueVo } from '../airtable-sdks';
import { ICreateFieldRo, IUserCellValue } from '../teable-sdks';
import { AirtableFieldVo } from './airtable.field.vo';
export declare class AirtableLastModifiedByField extends AirtableFieldVo {
    transformTeableCreateRecordRo(value: ICollaboratorCellValueVo): IUserCellValue;
    transformTeableCreateFieldRo(): ICreateFieldRo;
}
//# sourceMappingURL=airtable.last.modified.by.field.d.ts.map