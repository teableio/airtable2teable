import { TeableFieldType } from '@/types';
import { RatingIcon } from '../teable-sdks';
import { AirtableFieldVo } from './airtable.field.vo';
export class AirtableRatingField extends AirtableFieldVo {
    transformTeableCreateRecordRo(value) {
        return value;
    }
    transformTeableCreateFieldRo() {
        return {
            type: TeableFieldType.Rating,
            name: this.name,
            dbFieldName: this.id,
            description: this.description,
            isLookup: false,
            options: {
                icon: RatingIcon.Star,
                color: this.options.color,
                max: this.options.max,
            },
        };
    }
}
