import { ICollaboratorCellValueVo } from '../airtable-sdks';
import { ICreateFieldRo, IUserCellValue } from '../teable-sdks';
import { AirtableFieldVo } from './airtable.field.vo';
export declare class AirtableCreatedByField extends AirtableFieldVo {
    transformTeableCreateRecordRo(value: ICollaboratorCellValueVo): IUserCellValue;
    transformTeableCreateFieldRo(): ICreateFieldRo;
}
//# sourceMappingURL=airtable.created.by.field.d.ts.map