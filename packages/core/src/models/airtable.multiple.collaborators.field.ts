import { FieldType, IFieldRo, IUserCellValue } from '@teable/core';

import { ICollaboratorCellValueVo } from '../airtable-sdks';
import { AirtableFieldVo } from './airtable.field.vo';

export class AirtableMultipleCollaboratorsField extends AirtableFieldVo {
  transformTeableCreateRecordRo(
    value: ICollaboratorCellValueVo[],
  ): IUserCellValue[] {
    return (
      value?.map((v) => {
        return {
          id: v.id,
          title: v.name ?? '',
          avatarUrl: v.profilePicUrl,
        };
      }) || []
    );
  }

  transformTeableCreateFieldRo(): IFieldRo {
    return {
      type: FieldType.User,
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
