import { TeableFieldType } from '@/types';
import { AirtableFieldVo } from './airtable.field.vo';
export class AirtableMultipleCollaboratorsField extends AirtableFieldVo {
    transformTeableCreateRecordRo(value) {
        return (value?.map((v) => {
            return {
                id: v.id,
                title: v.name,
                avatarUrl: v.profilePicUrl,
            };
        }) || []);
    }
    transformTeableCreateFieldRo() {
        return {
            type: TeableFieldType.User,
            name: this.name,
            dbFieldName: this.id,
            description: this.description,
            isLookup: false,
            options: {
                isMultiple: true,
                shouldNotify: false,
            },
        };
    }
}
