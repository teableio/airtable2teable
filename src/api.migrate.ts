import { AirtableSdk } from './airtable-sdks';
import {
  AirtableLinkField,
  AirtableLongTextField,
  getAirtableField,
} from './models';
import {
  FieldKeyType,
  IFieldRo,
  IRecordsRo,
  Table,
  TeableSdk,
} from './teable-sdks';
import {
  AirtableField,
  AirtableFieldTypeEnum,
  IAirtableField,
  IAirtableRecord,
  IaT2tT,
  TeableViewTypeEnum,
} from './types';

export class ApiMigrate {
  private teableSdk: TeableSdk;
  private airtableSdk: AirtableSdk;

  constructor(
    private readonly option: {
      from: {
        airtableToken: string;
        baseId: string;
      };
      to: {
        teableToken: string;
        spaceId: string;
      };
    },
  ) {
    this.teableSdk = new TeableSdk({
      token: option.to.teableToken,
    });
    this.airtableSdk = new AirtableSdk(option.from.airtableToken);
  }

  async execute() {
    await this.generateTables();
  }

  private async generateTables() {
    const space = await this.teableSdk.getSpace(this.option.to.spaceId);
    const base = await space.createBase({
      spaceId: space.id,
      name: new Date().toISOString(),
    });
    const tables = await this.airtableSdk.getTables(this.option.from.baseId);
    const aTid2tT: Record<string, Table> = {};
    const migratedAirtableTableIds = new Set<string>();
    const at2tT: IaT2tT = {};
    const teableTablesRecordIdsMap: Record<string, Record<string, string>> = {};
    const airtableLookupFieldMap: Record<string, IAirtableField[]> = {};
    let i = 1;
    for (const table of tables) {
      const airtableRecords = await this.airtableSdk.getRecords(table);
      const airtableFieldsMap = this.getAirtableFieldsMap(
        table,
        migratedAirtableTableIds,
        aTid2tT,
        airtableLookupFieldMap,
      );
      const teableFieldCreateRos: IFieldRo[] = Object.values(
        airtableFieldsMap,
      ).map((field) => field.transformTeableFieldCreateRo());
      let j = 1;
      const teableRecordCreateRos: IRecordsRo = this.getRecordCreateRos(
        airtableRecords,
        airtableFieldsMap,
        teableTablesRecordIdsMap,
      );
      const teableTable = await base.createTable({
        name: table.name,
        description: table.description,
        order: i++,
        views: table.views.map((view) => {
          return {
            name: view.name,
            type: TeableViewTypeEnum.Grid,
            order: j++,
          };
        }),
        fieldKeyType: FieldKeyType.Name,
        fields: teableFieldCreateRos,
      });
      at2tT[table.id] = {
        [teableTable.id]: {},
      };
      const name2FieldId = table.fields.reduce((result, field) => {
        result[field.name] = field.id;
        return result;
      }, {});
      teableTable.vo.fields.forEach((field) => {
        const airatbleFieldId = name2FieldId[field.name];
        at2tT[table.id][teableTable.id][airatbleFieldId] = field;
      });
      await teableTable.deleteRecords(
        teableTable.vo.records.map((record) => record.id),
      );
      const records = await teableTable.createRecords(teableRecordCreateRos);
      const a2tRecordIdMap: Record<string, string> = {};
      for (let k = 0; k < airtableRecords.length; k++) {
        a2tRecordIdMap[airtableRecords[k].id] = records.records[k]?.id;
      }
      teableTablesRecordIdsMap[teableTable.id] = a2tRecordIdMap;
      aTid2tT[table.id] = teableTable;
      migratedAirtableTableIds.add(table.id);
    }
    for (const airtableId of Object.keys(airtableLookupFieldMap)) {
      const airtableFields = airtableLookupFieldMap[airtableId];
      for (const airtableField of airtableFields) {
        const airtableDataModel = getAirtableField(airtableField);
        const teableFieldCreateRo =
          airtableDataModel.transformTeableFieldCreateRo(airtableId, at2tT);
        const teableTable = aTid2tT[airtableId];
        await teableTable.createField(teableFieldCreateRo);
      }
    }
    return { tables, tablesMap: aTid2tT };
  }

  private getRecordCreateRos(
    airtableRecords: IAirtableRecord[],
    airtableFieldsMap: Record<string, AirtableField>,
    teableTablesRecordIdsMap: Record<string, Record<string, string>>,
  ): IRecordsRo {
    return airtableRecords.map((record) => {
      const newRecord: Record<string, any> = {};
      for (const fieldName in record.fields) {
        const cellValue = record.fields[fieldName];
        const fieldModel = airtableFieldsMap[fieldName];
        if (fieldModel) {
          newRecord[fieldName] = fieldModel.getApiCellValue(
            cellValue,
            teableTablesRecordIdsMap,
          );
        }
      }
      return {
        fields: newRecord,
      };
    });
  }

  private getAirtableFieldsMap(
    table: any,
    migratedAirtableTableIds: Set<string>,
    teableTablesMap: Record<string, Table>,
    airtableLookupFieldMap: Record<string, IAirtableField[]>,
  ): Record<string, AirtableField> {
    const airtableFieldsMap: Record<string, AirtableField> = {};
    table.fields.forEach((field) => {
      let airtableDataModel: AirtableField;
      if (field.type === AirtableFieldTypeEnum.MultipleRecordLinks) {
        if (
          field.options?.linkedTableId &&
          migratedAirtableTableIds.has(field.options?.linkedTableId)
        ) {
          airtableDataModel = new AirtableLinkField({
            id: field.id,
            name: field.name,
            description: field.description,
            type: AirtableFieldTypeEnum.MultipleRecordLinks,
            options: {
              isReversed: field.options.isReversed as boolean,
              prefersSingleRecordLink: field.options
                .prefersSingleRecordLink as boolean,
              linkedTableId: teableTablesMap[field.options.linkedTableId].id,
            },
          });
        } else {
          return;
        }
      } else if (
        // field.type === AirtableFieldTypeEnum.Count ||
        // field.type === AirtableFieldTypeEnum.Rollup ||
        field.type === AirtableFieldTypeEnum.MultipleLookupValues ||
        field.type === AirtableFieldTypeEnum.Lookup
      ) {
        if (field.options?.isValid) {
          airtableLookupFieldMap[table.id] =
            airtableLookupFieldMap[table.id] || [];
          airtableLookupFieldMap[table.id].push(field);
          return;
        } else {
          airtableDataModel = new AirtableLongTextField(field as any);
        }
      } else {
        airtableDataModel = getAirtableField(field);
      }
      airtableFieldsMap[field.name] = airtableDataModel;
    });
    return airtableFieldsMap;
  }
}
