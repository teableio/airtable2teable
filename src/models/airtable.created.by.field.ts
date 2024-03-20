import {
  AirtableCellTypeEnum,
  AirtableField,
  IAirtableCreatedByField,
  TeableFieldType,
} from 'types';
import { z } from 'zod';

import { IFieldRo } from '../teable-sdks';
import { collaboratorCellValueSchema } from './airtable.collaborator.field';

export type ICreatedByCellValueVo = z.infer<typeof collaboratorCellValueSchema>;

export class AirtableCreatedByField extends AirtableField {
  constructor(field: IAirtableCreatedByField) {
    super(field);
  }

  get cellType(): AirtableCellTypeEnum {
    return AirtableCellTypeEnum.OBJECT;
  }

  getApiCellValue(value: ICreatedByCellValueVo) {
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
