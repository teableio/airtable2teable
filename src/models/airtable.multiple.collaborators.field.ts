import { AirtableCellTypeEnum, TeableFieldType } from 'types';
import { z } from 'zod';

import { IFieldRo } from '../teable-sdks';
import { collaboratorCellValueSchema } from './airtable.collaborator.field';
import { AirtableFieldVo } from './airtable.field.vo';

export const multipleCollaboratorCellValueSchema =
  collaboratorCellValueSchema.array();

export type IMultipleCollaboratorCellValueVo = z.infer<
  typeof multipleCollaboratorCellValueSchema
>;

export class AirtableMultipleCollaboratorsField extends AirtableFieldVo {
  get cellType(): AirtableCellTypeEnum {
    return AirtableCellTypeEnum.ARRAY;
  }

  getTeableDBCellValue(value: unknown): string {
    return `'${String((value as any[])?.map((v) => v.name))}'`;
  }

  getApiCellValue(value: IMultipleCollaboratorCellValueVo) {
    return value?.map((v) => v.name);
  }

  transformTeableFieldCreateRo(): IFieldRo {
    return {
      type: TeableFieldType.MultipleSelect,
      name: this.name,
      description: this.description,
      isLookup: false,
      options: {
        choices: [],
      },
    };
  }
}
