import { PrismaClient } from '@prisma/client';
import {
  AirtableFieldTypeEnum,
  AirtableViewTypeEnum,
  IAirtableTable,
} from 'types';

describe('airtable table meta transform', () => {
  test('store table base information into teable table meta db.', async () => {
    const airtableTable: IAirtableTable = {
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
        description: airtableTable.description,
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
    for (const field of airtableTable.fields) {
      await client.field.create({
        data: {
          id: field.id,
          name: field.name,
          description: field.description,
          options: '{}',
          type: field.type,
          cell_value_type: 'string',
          is_multiple_cell_value: false,
          db_field_type: 'TEXT',
          db_field_name: `unnamed_${field.id}`,
          not_null: false,
          unique: false,
          is_primary: field.id === airtableTable.primaryFieldId,
          is_computed: false,
          is_lookup: false,
          has_error: false,
          lookup_linked_field_id: null,
          lookup_options: null,
          table_id: airtableTable.id,
          column_meta: '{}',
          version: 1,
          created_time: new Date(),
          last_modified_time: new Date(),
          deleted_time: null,
          created_by: 'admin',
          last_modified_by: 'admin',
        },
      });
    }
    const count = await client.field.count();
    expect(count).toEqual(1);
    const deletedField = await client.field.delete({
      where: { id: airtableTable.primaryFieldId },
    });
    expect(deletedField).toBeDefined();
    const deletedTable = await client.table_meta.delete({
      where: { id: tableMeta.id },
    });
    expect(deletedTable).toBeDefined();
  });
});
