import axios from 'axios';

import { getAirtableField } from './models';
import { FieldKeyType, TeableSdk } from './teable-sdks';
import { IAirtableTable } from './types';
import { ViewMapper } from './util';

export class ApiMigrate {
  private sdkTeable: TeableSdk;

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
    this.sdkTeable = new TeableSdk({
      token: option.to.teableToken,
    });
  }

  async execute() {
    await this.generateTable();
  }

  private async generateTable() {
    const space = await this.sdkTeable.getSpace(this.option.to.spaceId);
    const base = await space.createBase({
      spaceId: space.id,
    });
    // 1. Get airtable table meta.
    const response = await axios.get<{ tables: IAirtableTable[] }>(
      `https://api.airtable.com/v0/meta/bases/${this.option.from.baseId}/tables`,
      {
        headers: {
          Authorization: `Bearer ${this.option.from.airtableToken}`,
        },
      },
    );
    if (response.status !== 200) {
      throw new Error(
        `Response Status: ${response.status}, Response Message: ${response.statusText}`,
      );
    }
    const tables = response.data.tables;
    const tablesMap = {};
    let i = 1;
    for (const table of tables) {
      let j = 1;
      const teableTable = await base.createTable({
        name: table.name,
        description: table.description,
        order: i++,
        views: table.views.map((view) => {
          return {
            name: view.name,
            type: ViewMapper[view.type] as any,
            order: j++,
          };
        }),
        fieldKeyType: FieldKeyType.Id,
        fields: table.fields.map((field) => {
          const airtableDataModel = getAirtableField(field);
          return airtableDataModel.transformTeableFieldCreateRo();
        }),
        records: [],
      });
      tablesMap[teableTable.id] = teableTable;
    }
    return tablesMap;
  }
}
