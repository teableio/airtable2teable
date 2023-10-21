import { ApiMigrate } from './api.migrate';

describe('api migrate', () => {
  test('create table meta by api migrate', async () => {
    const apiMigrate = new ApiMigrate({
      from: {
        airtableToken: process.env.AIRTABLE_TOKEN,
        baseId: process.env.AIRTABLE_BASE_ID,
      },
      to: {
        teableToken: process.env.TEABLE_TOKEN,
        spaceId: process.env.TEABLE_SPACE_ID,
      },
    });
    await apiMigrate.execute();
  }, 600000);
});
