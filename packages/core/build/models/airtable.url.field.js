import { TeableFieldType } from '@/types';
import { SingleLineTextDisplayType, } from '../teable-sdks';
import { AirtableFieldVo } from './airtable.field.vo';
export class AirtableUrlField extends AirtableFieldVo {
    transformTeableCreateRecordRo(value) {
        return value;
    }
    transformTeableCreateFieldRo() {
        return {
            type: TeableFieldType.SingleLineText,
            name: this.name,
            dbFieldName: this.id,
            description: this.description,
            isLookup: false,
            options: {
                showAs: {
                    type: SingleLineTextDisplayType.Url,
                },
            },
        };
    }
}
