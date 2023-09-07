import { PrismaClient } from '@prisma/client';
import {
  AirtableFieldTypeEnum,
  AirtableViewTypeEnum,
  IAirtableTableModel,
} from 'types';

describe('airtable table meta transform', () => {
  test('store table base information into teable table meta db.', async () => {
    const airtableTable: IAirtableTableModel = {
      id: 'tblXxx',
      name: 'Table',
      primaryFieldId: 'fldXxx',
      fields: [
        {
          type: AirtableFieldTypeEnum.SingleLineText,
          id: 'fldXxx',
          name: 'Field',
        },
      ],
      views: [
        {
          id: 'viwXxx',
          name: 'Grid View',
          type: AirtableViewTypeEnum.GridView,
        },
      ],
    };
    const client = new PrismaClient({
      datasourceUrl: `file:${__dirname}/teable.test.db`,
    });
    const tableMeta = await client.table_meta.create({
      data: {
        id: airtableTable.id,
        name: airtableTable.name,
        db_table_name: 'visual_xxx',
        version: 1,
        order: 1,
        created_time: new Date(),
        last_modified_time: new Date(),
        created_by: 'admin',
        last_modified_by: 'admin',
      },
    });
    expect(tableMeta).toBeDefined();
    const { count } = await client.table_meta.deleteMany({
      where: { id: tableMeta.id },
    });
    expect(count).toEqual(1);
  });
});
