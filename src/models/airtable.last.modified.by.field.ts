import { AirtableCellTypeEnum, TeableFieldType } from 'types';
import { z } from 'zod';

import { IFieldRo } from '../teable-sdks';
import { collaboratorCellValueSchema } from './airtable.collaborator.field';
import { AirtableFieldVo } from './airtable.field.vo';

export type ILastModifiedCellValueVo = z.infer<
  typeof collaboratorCellValueSchema
>;

export class AirtableLastModifiedByField extends AirtableFieldVo {
  get cellType(): AirtableCellTypeEnum {
    return AirtableCellTypeEnum.OBJECT;
  }

  getApiCellValue(value: ILastModifiedCellValueVo) {
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
