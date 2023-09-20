import { createReadStream, createWriteStream } from 'node:fs';
import { createGzip } from 'node:zlib';

import * as path from 'path';
import { firstValueFrom, Observable } from 'rxjs';

export class DBMigrate {
  private readonly dbFilePath: string;

  constructor(
    private readonly option: {
      from: {
        airtableToken: string;
      };
      to: {
        dirPath: string;
      };
    },
  ) {
    const rootPath = path.dirname(`${__dirname}`);
    this.dbFilePath = `${rootPath}/prisma/teable.db`;
  }

  execute(): void {}

  async generateTeableFile(): Promise<string> {
    const fileName = 'db.teable';
    const observable = new Observable((subscriber) => {
      const readStream = createReadStream(this.dbFilePath);
      const gzipStream = createGzip();
      const writeStream = createWriteStream(
        `${this.option.to.dirPath}/${fileName}`,
      );
      readStream.pipe(gzipStream).pipe(writeStream);
      readStream.on('end', () => {
        subscriber.next();
      });
    });
    await firstValueFrom(observable);
    return fileName;
  }
}
