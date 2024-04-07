import { TeableFieldType } from 'types';

import { ICollaboratorCellValueVo, IObjectOptionsVo } from '../airtable-sdks';
import { ICreateFieldRo, IUserCellValue } from '../teable-sdks';
import { AirtableFieldVo } from './airtable.field.vo';

export class AirtableMultipleCollaboratorsField extends AirtableFieldVo {
  options: IObjectOptionsVo;

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
      description: this.description,
      isLookup: false,
      options: {
        isMultiple: true,
        shouldNotify: false,
      },
    };
  }
}
