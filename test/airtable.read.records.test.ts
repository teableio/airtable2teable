import axios from 'axios';
import { AirtableTableModel } from 'types';

describe('Read records', () => {
  test('first read test', async () => {
    const baseId = '';
    const response = await axios.get<{ tables: AirtableTableModel[] }>(
      `https://api.airtable.com/v0/meta/bases/${baseId}/tables`,
      {
        headers: {
          Authorization: 'Bearer ',
        },
      },
    );
    console.log(JSON.stringify(response.data.tables, null, 2));
  });
});
