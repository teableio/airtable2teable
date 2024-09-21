import { TeableFieldType } from '@/types';
import { AirtableFieldVo } from './airtable.field.vo';
export class AirtableCreatedByField extends AirtableFieldVo {
    transformTeableCreateRecordRo(value) {
        return {
            id: value.id,
            title: value.name,
            avatarUrl: value.profilePicUrl,
        };
    }
    transformTeableCreateFieldRo() {
        return {
            type: TeableFieldType.User,
            name: this.name,
            dbFieldName: this.id,
            description: this.description,
            isLookup: false,
            options: {
                isMultiple: false,
                shouldNotify: false,
            },
        };
    }
}
