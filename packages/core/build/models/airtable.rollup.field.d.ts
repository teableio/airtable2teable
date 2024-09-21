import { INumberCellValueVo, ITextCellValueVo } from '../airtable-sdks';
import { ICreateFieldRo, IRollupCellValue } from '../teable-sdks';
import { AirtableFieldVo } from './airtable.field.vo';
export declare class AirtableRollupField extends AirtableFieldVo {
    transformTeableCreateRecordRo(value: INumberCellValueVo[] | ITextCellValueVo[]): IRollupCellValue;
    transformTeableCreateFieldRo(): ICreateFieldRo;
}
//# sourceMappingURL=airtable.rollup.field.d.ts.map