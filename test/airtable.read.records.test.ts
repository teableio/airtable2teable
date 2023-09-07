import axios from 'axios';
import { IAirtableTableModel } from 'types';

describe('Read records', () => {
  test('first read test', async () => {
    const baseId = 'appfj6B27vlQf3TWm';
    const response = await axios.get<{ tables: IAirtableTableModel[] }>(
      `https://api.airtable.com/v0/meta/bases/${baseId}/tables`,
      {
        headers: {
          Authorization:
            'Bearer patYDGPJsV1aGD74T.ba2237ab2f4affd3c6b0f194b317354bf44764ca1b770d992a7365f2d9003daa',
        },
      },
    );
    console.log(JSON.stringify(response.data.tables, null, 2));
  });
});
