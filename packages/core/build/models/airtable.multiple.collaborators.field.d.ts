import { ICollaboratorCellValueVo } from '../airtable-sdks';
import { ICreateFieldRo, IUserCellValue } from '../teable-sdks';
import { AirtableFieldVo } from './airtable.field.vo';
export declare class AirtableMultipleCollaboratorsField extends AirtableFieldVo {
    transformTeableCreateRecordRo(value: ICollaboratorCellValueVo[]): IUserCellValue[];
    transformTeableCreateFieldRo(): ICreateFieldRo;
}
//# sourceMappingURL=airtable.multiple.collaborators.field.d.ts.map