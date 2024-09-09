import { Command, Flags, ux } from '@oclif/core';

import { ApiMigrate } from '../../api.migrate';

export default class BaseMigrate extends Command {
  static flags = {
    baseUrl: Flags.string({
      description: 'api base url',
    }),
    from: Flags.string({
      description: 'airtable base id',
    }),
    to: Flags.string({
      description: 'teable space id',
    }),
  };
  static summary: 'migrate airtable base into teable space.';

  async run(): Promise<any> {
    const { flags } = await this.parse(BaseMigrate);

    const airtableToken = await ux.prompt('Airtable Token');
    const teableToken = await ux.prompt('Teable Token');

    if (!flags.from) {
      throw new Error('Base No Set');
    }

    if (!flags.to) {
      throw new Error('Sapce No Set');
    }

    const apiMirgrate = new ApiMigrate({
      from: {
        baseId: flags.from,
        airtableToken: airtableToken,
      },
      to: {
        spaceId: flags.to,
        teableToken: teableToken,
      },
      baseUrl: flags.baseUrl,
    });

    await apiMirgrate.execute();

    this.log(`base:migrate --from ${flags.from} --to ${flags.to}`);
  }
}
