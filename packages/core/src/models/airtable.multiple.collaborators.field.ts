import { TeableFieldType } from '@/types';

import { ICollaboratorCellValueVo } from '../airtable-sdks';
import { ICreateFieldRo, IUserCellValue } from '../teable-sdks';
import { AirtableFieldVo } from './airtable.field.vo';

export class AirtableMultipleCollaboratorsField extends AirtableFieldVo {
  transformTeableCreateRecordRo(
    value: ICollaboratorCellValueVo[],
  ): IUserCellValue[] {
    return (
      value?.map((v) => {
        return {
          id: v.id,
          title: v.name,
          avatarUrl: v.profilePicUrl,
        };
      }) || []
    );
  }

  transformTeableCreateFieldRo(): ICreateFieldRo {
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
