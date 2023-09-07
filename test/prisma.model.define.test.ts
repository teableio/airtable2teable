import { DbExecute } from '@prisma/migrate';

describe('Prisma create model', () => {
  test('db execute', async () => {
    const result = await DbExecute.new().parse([
      `--url=file:${__dirname}/test.db`,
      `--file=${__dirname}/script.sql`,
    ]);
    expect(result).toEqual('Script executed successfully.');
  });
});
