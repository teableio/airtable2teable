import { TeableFieldType } from 'types';

import { ICollaboratorCellValueVo } from '../airtable-sdks';
import { ICreateFieldRo, IUserCellValue } from '../teable-sdks';
import { AirtableFieldVo } from './airtable.field.vo';

export class AirtableLastModifiedByField extends AirtableFieldVo {
  options: undefined;

  transformTeableCreateRecordRo(
    value: ICollaboratorCellValueVo,
  ): IUserCellValue {
    return {
      id: value.id,
      title: value.name,
      avatarUrl: value.profilePicUrl,
    };
  }

  transformTeableCreateFieldRo(): ICreateFieldRo {
    return {
      type: TeableFieldType.User,
      name: this.name,
      description: this.description,
      isLookup: false,
      options: {
        isMultiple: false,
        shouldNotify: false,
      },
    };
  }
}
