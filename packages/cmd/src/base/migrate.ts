import { Command, Flags } from '@oclif/core';
import { input } from '@inquirer/prompts';

import { ApiMigrate } from '@teatool/core';

export default class BaseMigrate extends Command {
  static flags = {
    baseUrl: Flags.string({
      description: 'api base url',
    }),
    fromRps: Flags.integer({
      description: 'airtable request per second',
    }),
    from: Flags.string({
      description: 'airtable base id',
    }),
    toRps: Flags.integer({
      description: 'teable request per second',
    }),
    to: Flags.string({
      description: 'teable space id',
    }),
  };
  static summary: 'migrate airtable base into teable space.';

  async run(): Promise<any> {
    const { flags } = await this.parse(BaseMigrate);

    const airtableToken =  await input({ message: 'Airtable Token' });
    const teableToken = await input({ message: 'Teable Token' });

    if (!flags.from) {
      throw new Error('Base No Set');
    }

    if (!flags.to) {
      throw new Error('Space No Set');
    }

    const apiMigrate = new ApiMigrate({
      from: {
        baseId: flags.from,
        airtableToken: airtableToken,
        rps: flags.fromRps,
      },
      to: {
        spaceId: flags.to,
        teableToken: teableToken,
        rps: flags.toRps,
      },
      baseUrl: flags.baseUrl,
    });

    await apiMigrate.execute();

    this.log(`base:migrate --from ${flags.from} --to ${flags.to} --baseUrl ${flags.baseUrl} --fromRps ${flags.fromRps} --toRps ${flags.toRps}`);
  }
}
