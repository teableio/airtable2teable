import { rmSync } from 'node:fs';

import { DBMigrate } from './index';

describe('DBMigrate', () => {
  test('copy db file', async () => {
    const dbMigrate = new DBMigrate({
      from: {
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
});
