import { ICollaboratorCellValueVo } from '../airtable-sdks';
import { ICreateFieldRo, IUserCellValue } from '../teable-sdks';
import { AirtableFieldVo } from './airtable.field.vo';
export declare class AirtableCollaboratorField extends AirtableFieldVo {
    transformTeableCreateRecordRo(value: ICollaboratorCellValueVo): IUserCellValue;
    transformTeableCreateFieldRo(): ICreateFieldRo;
}
//# sourceMappingURL=airtable.collaborator.field.d.ts.map