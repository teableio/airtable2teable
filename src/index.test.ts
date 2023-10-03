import { rmSync } from 'node:fs';

import { DBMigrate } from './index';

describe('DBMigrate', () => {
  test('copy db file', async () => {
    const dbMigrate = new DBMigrate({
      from: {
        baseId: '',
        airtableToken: '',
      },
      to: {
        dirPath: __dirname,
      },
    });
    await dbMigrate.generateTempFile();
    rmSync(`${__dirname}\\temp.db`);
  });

  test('generate teable file', async () => {
    const dbMigrate = new DBMigrate({
      from: {
        baseId: '',
        airtableToken: '',
      },
      to: {
        dirPath: __dirname,
      },
    });
    await dbMigrate.generateTempFile();
    const fileName = await dbMigrate.generateTeableFile();
    rmSync(`${__dirname}\\${fileName}`);
  });

  test('generate table meta', async () => {
    const dbMigrate = new DBMigrate({
      from: {
        baseId: 'appfj6B27vlQf3TWm',
        airtableToken:
          'patYDGPJsV1aGD74T.ba2237ab2f4affd3c6b0f194b317354bf44764ca1b770d992a7365f2d9003daa',
      },
      to: {
        dirPath: __dirname,
      },
    });
    await dbMigrate.init();
    await dbMigrate.generateTableMeta();
    // rmSync(`${__dirname}\\temp.db`);
  }, 300000);
});
