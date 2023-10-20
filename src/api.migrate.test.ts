import { ApiMigrate } from './api.migrate';

describe('api migrate', () => {
  test('create table meta by api migrate', async () => {
    const apiMigrate = new ApiMigrate({
      from: {
        airtableToken:
          'patYDGPJsV1aGD74T.ba2237ab2f4affd3c6b0f194b317354bf44764ca1b770d992a7365f2d9003daa',
        baseId: 'appfj6B27vlQf3TWm',
      },
      to: {
        teableToken:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InVzclhZU1BRbWs3R1EiLCJpYXQiOjE2OTc3MjM4MDUsImV4cCI6MTY5OTQ1MTgwNX0.1kWEAmSqBk3V2dt8GAH4kJ7NeE9gBTeU7FhZT0zSzMM',
        spaceId: 'spcbb8QhrvXbe',
      },
    });
    await apiMigrate.execute();
  }, 600000);
});
