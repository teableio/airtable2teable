import { createReadStream, createWriteStream, rmSync } from 'node:fs';
import { createGzip } from 'node:zlib';

import { PrismaClient } from '@prisma/client';
import axios from 'axios';
import * as path from 'path';
import { firstValueFrom, Observable } from 'rxjs';

import { getAirtableField } from './models';
import { AirtableField, IAirtableTable } from './types';
import { IAirtableRecord } from './types/fields/airtable.record';

export class DBMigrate {
  private readonly dbFilePath: string;
  private client: PrismaClient;

  constructor(
    private readonly option: {
      from: {
        airtableToken: string;
        baseId: string;
      };
      to: {
        dirPath: string;
      };
    },
  ) {
    const rootPath = path.dirname(`${__dirname}`);
    this.dbFilePath = `${rootPath}/prisma/teable.db`;
  }

  async init() {
    await this.generateTempFile();
    this.client = new PrismaClient({
      datasourceUrl: `file:${this.option.to.dirPath}/temp.db`,
    });
  }

  async execute(): Promise<void> {
    // 0. prepare
    if (!this.client) {
      await this.init();
    }
    // 1. add table meta.
    const teableMeta = await this.generateTableMeta();
    // 2. add records.
    await this.migrateRecords(teableMeta);
    // end.
    await this.generateTeableFile();
  }

  async generateTempFile(): Promise<void> {
    const fileName = 'temp.db';
    const observable = new Observable((subscriber) => {
      const readStream = createReadStream(this.dbFilePath);
      const writeStream = createWriteStream(
        `${this.option.to.dirPath}/${fileName}`,
      );
      readStream.pipe(writeStream);
      readStream.on('end', () => {
        subscriber.next();
      });
    });
    await firstValueFrom(observable);
  }

  async generateTableMeta(): Promise<
    Record<string, Record<string, AirtableField>>
  > {
    const result: Record<string, Record<string, AirtableField>> = {};
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
    const tables = response.data;
    // 2. Loop to transform data model.
    for (const table of tables.tables) {
      const time = new Date();
      // 2.1 add table meta
      const tableMeta = await this.client.table_meta.create({
        data: {
          id: table.id,
          name: table.name,
          description: table.description,
          db_table_name: `visual_${table.id}`,
          version: 1,
          order: 1,
          created_time: time,
          last_modified_time: time,
          created_by: 'admin',
          last_modified_by: 'admin',
        },
      });
      const visualTableSql = `
        CREATE TABLE visual_${tableMeta.id} (
          __id TEXT NOT NULL UNIQUE,
          __auto_number INTEGER PRIMARY KEY AUTOINCREMENT,
          __row_default REAL NOT NULL,
          __created_time DATETIME NOT NULL,
          __last_modified_time DATETIME,
          __created_by TEXT NOT NULL,
          __last_modified_by TEXT,
          __version INTEGER NOT NULL
        );
      `;
      await this.client.$executeRawUnsafe(visualTableSql);
      // 2.2 add views
      for (let i = 0; i < table.views?.length; i++) {
        const view = table.views[i];
        await this.client.view.create({
          data: {
            id: view.id,
            name: view.name,
            description: '',
            table_id: tableMeta.id,
            type: view.type,
            sort: '{}',
            filter: '{}',
            group: '{}',
            options: '{}',
            // todo: no right order
            order: i + 1,
            version: 1,
            created_time: time,
            last_modified_time: time,
            deleted_time: null,
            created_by: 'admin',
            last_modified_by: 'admin',
          },
        });
        const viewSql = `
        ALTER TABLE visual_${tableMeta.id} ADD COLUMN __${view.id} INTEGER
        `;
        await this.client.$executeRawUnsafe(viewSql);
      }
      result[table.id] = {};
      // 2.3 add fields
      for (const field of table.fields) {
        const airtableDataModel = getAirtableField(field);
        const teableDataModel = airtableDataModel.transformDataModel();
        teableDataModel.validateOptions();
        result[table.id][airtableDataModel.id] = airtableDataModel;
        await this.client.field.create({
          data: {
            id: teableDataModel.id,
            name: teableDataModel.name,
            description: teableDataModel.description,
            options: JSON.stringify(teableDataModel.options),
            type: teableDataModel.type,
            cell_value_type: 'string',
            is_multiple_cell_value: false,
            db_field_type: teableDataModel.dbFieldType,
            db_field_name: `unnamed_${field.id}`,
            not_null: false,
            unique: false,
            is_primary: field.id === table.primaryFieldId,
            is_computed: false,
            is_lookup: false,
            has_error: false,
            lookup_linked_field_id: null,
            lookup_options: null,
            table_id: tableMeta.id,
            column_meta: '{}',
            version: 1,
            created_time: time,
            last_modified_time: time,
            deleted_time: null,
            created_by: 'admin',
            last_modified_by: 'admin',
          },
        });
        const columnSql = `
        ALTER TABLE visual_${tableMeta.id} ADD COLUMN unnamed_${field.id} ${teableDataModel.dbFieldType}
        `;
        await this.client.$executeRawUnsafe(columnSql);
      }
    }
    return result;
  }

  async generateTeableFile(): Promise<string> {
    const fileName = 'db.teable';
    const observable = new Observable((subscriber) => {
      const readStream = createReadStream(`${this.option.to.dirPath}/temp.db`);
      const gzipStream = createGzip({ level: 9 });
      const writeStream = createWriteStream(
        `${this.option.to.dirPath}/${fileName}`,
      );
      readStream.pipe(gzipStream).pipe(writeStream);
      readStream.on('end', () => {
        subscriber.next();
      });
    });
    await firstValueFrom(observable);
    rmSync(`${this.option.to.dirPath}/temp.db`);
    return fileName;
  }

  async migrateRecords(
    tableMeta: Record<string, Record<string, AirtableField>>,
  ) {
    for (const tableId in tableMeta) {
      // 0. Get table field models.
      const fieldsModelMap = tableMeta[tableId];
      // 1. Get airtable record.
      const response = await axios.get<{
        offset?: string;
        records: IAirtableRecord[];
      }>(
        `https://api.airtable.com/v0/${this.option.from.baseId}/${tableId}?returnFieldsByFieldId=true`,
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
      const records = response.data.records;
      let fieldsSql = '';
      const fieldIds = [];
      for (const fieldId in fieldsModelMap) {
        fieldsSql += `, unnamed_${fieldId}`;
        fieldIds.push(fieldId);
      }
      const recordSqlHeader = `
        INSERT INTO visual_${tableId} (
          __id, 
          __auto_number, 
          __row_default, 
          __created_time, 
          __last_modified_time, 
          __created_by, 
          __last_modified_by,
          __version
          ${fieldsSql}
        )
        VALUES
      `;
      let autoNumber = 1;
      const rows: string[] = [];
      const time = new Date().toISOString();
      for (const record of records) {
        const fieldValues = fieldIds
          .map((fieldId) => {
            const cellValue = record.fields[fieldId];
            return fieldsModelMap[fieldId].getTeableDBCellValue(cellValue);
          })
          .join(', ');
        const row = `
          (
            '${record.id}', 
            ${autoNumber}, 
            ${autoNumber - 1}, 
            '${time}',
            '${time}',
            'admin', 
            'admin', 
            1, 
            ${fieldValues}
          )
        `;
        rows.push(row);
        autoNumber++;
      }
      const rowsSql = `
        ${recordSqlHeader} ${rows.join(', ')};
        `;
      await this.client.$executeRawUnsafe(rowsSql);
    }
  }
}
