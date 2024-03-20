import {
  AirtableCellTypeEnum,
  AirtableField,
  IAirtableCollaboratorField,
  TeableFieldType,
} from 'types';
import { z } from 'zod';

import { IFieldRo } from '../teable-sdks';

export const collaboratorCellValueSchema = z.object({
  id: z.string(),
  email: z.string().optional(),
  name: z.string().optional(),
  profilePicUrl: z.string().optional(),
});

export type ICollaboratorCellValueVo = z.infer<
  typeof collaboratorCellValueSchema
>;

export class AirtableCollaboratorField extends AirtableField {
  constructor(field: IAirtableCollaboratorField) {
    super(field);
  }

  get cellType(): AirtableCellTypeEnum {
    return AirtableCellTypeEnum.OBJECT;
  }

  getApiCellValue(value: ICollaboratorCellValueVo) {
    return value.name;
  }

  transformTeableFieldCreateRo(): IFieldRo {
    return {
      type: TeableFieldType.SingleSelect,
      name: this.name,
      description: this.description,
      isLookup: false,
      options: {
        choices: [],
      },
    };
  }
}
