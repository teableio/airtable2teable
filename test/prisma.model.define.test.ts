import { DbExecute } from '@prisma/migrate';

describe('Prisma create model', () => {
  test('demo', async () => {
    // const prisma = new PrismaClient({
    //   datasourceUrl: `file:./test.db`,
    // });
    // prisma.$executeRaw`CREATE TABLE test(ID INT PRIMARY KEY  NOT NULL)`;
    // const connect = prisma.$connect();
    const result = await DbExecute.new().parse([
      `--url=file:${__dirname}/test.db`,
      `--file=${__dirname}/script.sql`,
    ]);
    expect(result).toEqual('Script executed successfully.');
  });
});
