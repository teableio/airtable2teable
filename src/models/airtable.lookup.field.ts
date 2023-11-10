import { AirtableLinkField, getAirtableField } from 'models';
import { IFieldRo, ILinkFieldOptions } from 'teable-sdks';
import {
  AirtableCellTypeEnum,
  AirtableField,
  IAirtableLookupField,
  IaT2tT,
} from 'types';

export class AirtableLookupField extends AirtableField {
  constructor(field: IAirtableLookupField) {
    super(field);
  }

  get cellType(): AirtableCellTypeEnum {
    return AirtableCellTypeEnum.ARRAY;
  }

  getTeableDBCellValue(value: unknown): string {
    return `'${String(value)}'`;
  }

  getApiCellValue(value: unknown): string {
    return String(value);
  }

  transformTeableFieldCreateRo(
    currentAirtableTableId: string,
    at2tT: IaT2tT,
    ...others: unknown[]
  ): IFieldRo {
    if (!this.options?.isValid) {
      throw new Error('It not right lookup field.');
    }
    const currentTeableTable = at2tT[currentAirtableTableId];
    const currentTeableTableId = Object.keys(currentTeableTable)[0];
    if (!currentTeableTableId) {
      throw new Error('unkonwn table.');
    }
    const recordLinkField =
      currentTeableTable[currentTeableTableId][this.options?.recordLinkFieldId];
    if (!recordLinkField) {
      throw new Error('unkonwn link field.');
    }
    const foreignTableId = (recordLinkField.options as ILinkFieldOptions)
      .foreignTableId;
    const tTid2aTid: Record<string, string> = {};
    Object.entries(at2tT).forEach(([key, value]) => {
      tTid2aTid[Object.keys(value)[0]] = key;
    });
    const lookupedTeableField =
      at2tT[tTid2aTid[foreignTableId]][foreignTableId][
        this.options?.fieldIdInLinkedTable
      ];
    if (!lookupedTeableField) {
      throw new Error('unkonwn lookuped field.');
    }
    const airtableDataModel = getAirtableField({
      ...this.options?.result,
    });
    return {
      ...airtableDataModel.transformTeableFieldCreateRo(
        tTid2aTid[foreignTableId],
        at2tT,
      ),
      name: this.name,
      description: this.description || '',
      isLookup: true,
      lookupOptions: {
        foreignTableId,
        lookupFieldId: lookupedTeableField.id,
        linkFieldId: recordLinkField.id,
      },
    };
  }
}
