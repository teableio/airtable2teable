import { AirtableCellTypeEnum, TeableFieldType } from 'types';
import { z } from 'zod';

import { ICreateFieldRo } from '../teable-sdks';
import { collaboratorCellValueSchema } from './airtable.collaborator.field';
import { AirtableFieldVo } from './airtable.field.vo';

export type ILastModifiedCellValueVo = z.infer<
  typeof collaboratorCellValueSchema
>;

export class AirtableLastModifiedByField extends AirtableFieldVo {
  options: undefined;

  get cellType(): AirtableCellTypeEnum {
    return AirtableCellTypeEnum.OBJECT;
  }

  getApiCellValue(value: ILastModifiedCellValueVo) {
    return value.name;
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
