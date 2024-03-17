import { AirtableSdk } from './index';

describe('sdks test', () => {
  let sdk: AirtableSdk;

  beforeAll(() => {
    sdk = new AirtableSdk(process.env.AIRTABLE_TOKEN || '');
  });

  test('Get Tables', async () => {
    await sdk.getTables(process.env.AIRTABLE_BASE_ID);
  }, 60000);
});
