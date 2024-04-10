import { ApiMigrate } from './api.migrate';

describe('api migrate', () => {
  test('create table meta by api migrate', async () => {
    const apiMigrate = new ApiMigrate({
      from: {
        airtableToken: process.env.AIRTABLE_TOKEN as string,
        baseId: process.env.AIRTABLE_BASE_ID as string,
      },
      to: {
        teableToken: process.env.TEABLE_TOKEN as string,
        spaceId: process.env.TEABLE_SPACE_ID as string,
      },
    });
    await apiMigrate.execute();
  }, 600000);
});
