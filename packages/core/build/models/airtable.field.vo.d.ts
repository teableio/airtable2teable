import { AirtableFieldTypeEnum } from '@/types';
import { IAirtableFieldVo, IFieldCellVo, IFieldOptionsVo } from '../airtable-sdks';
import { ICreateFieldRo, IFieldCellValueVo } from '../teable-sdks';
export declare abstract class AirtableFieldVo implements IAirtableFieldVo {
    tableId: string;
    id: string;
    name: string;
    type: AirtableFieldTypeEnum;
    description?: string;
    options?: IFieldOptionsVo;
    constructor(vo: IAirtableFieldVo & {
        tableId: string;
    });
    abstract transformTeableCreateRecordRo(value: IFieldCellVo, ...args: unknown[]): IFieldCellValueVo;
    abstract transformTeableCreateFieldRo(...args: unknown[]): ICreateFieldRo;
}
//# sourceMappingURL=airtable.field.vo.d.ts.map