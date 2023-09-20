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
    const fileName = await dbMigrate.generateTeableFile();
    rmSync(`${__dirname}\\${fileName}`);
  });
});
