import {
  AirtableCellTypeEnum,
  AirtableField,
  IAirtableCollaboratorField,
} from 'types';

export class AirtableCollaboratorField extends AirtableField {
  constructor(field: IAirtableCollaboratorField) {
    super(field);
  }

  get cellType(): AirtableCellTypeEnum {
    return AirtableCellTypeEnum.OBJECT;
  }
}
