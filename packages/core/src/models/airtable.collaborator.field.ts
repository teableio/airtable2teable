import { FieldType, IFieldRo, IUserCellValue } from '@teable/core';

import { ICollaboratorCellValueVo } from '../airtable-sdks';
import { AirtableFieldVo } from './airtable.field.vo';

export class AirtableCollaboratorField extends AirtableFieldVo {
  transformTeableCreateRecordRo(
    value: ICollaboratorCellValueVo,
  ): IUserCellValue {
    return {
      id: value.id,
      title: value.name ?? '',
      avatarUrl: value.profilePicUrl,
    };
  }

  transformTeableCreateFieldRo(): IFieldRo {
    return {
      type: FieldType.User,
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
