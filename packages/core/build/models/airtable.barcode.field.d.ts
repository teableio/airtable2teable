import { IBarcodeCellValueVo } from '../airtable-sdks';
import { ICreateFieldRo, ISingleLineTextCellValue } from '../teable-sdks';
import { AirtableFieldVo } from './airtable.field.vo';
export declare class AirtableBarcodeField extends AirtableFieldVo {
    transformTeableCreateRecordRo(value: IBarcodeCellValueVo): ISingleLineTextCellValue;
    transformTeableCreateFieldRo(): ICreateFieldRo;
}
//# sourceMappingURL=airtable.barcode.field.d.ts.map