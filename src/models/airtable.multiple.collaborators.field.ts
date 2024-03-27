import { AirtableCellTypeEnum, TeableFieldType } from 'types';
import { z } from 'zod';

import { IObjectOptionsVo } from '../airtable-sdks';
import { ICreateFieldRo } from '../teable-sdks';
import { collaboratorCellValueSchema } from './airtable.collaborator.field';
import { AirtableFieldVo } from './airtable.field.vo';

export const multipleCollaboratorCellValueSchema =
  collaboratorCellValueSchema.array();

export type IMultipleCollaboratorCellValueVo = z.infer<
  typeof multipleCollaboratorCellValueSchema
>;

export class AirtableMultipleCollaboratorsField extends AirtableFieldVo {
  options: IObjectOptionsVo;

  get cellType(): AirtableCellTypeEnum {
    return AirtableCellTypeEnum.ARRAY;
  }

  getApiCellValue(value: IMultipleCollaboratorCellValueVo) {
    return value?.map((v) => v.name);
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
