import { Command, Flags } from '@oclif/core';

export default class BaseMigrate extends Command {
  static flags = {
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

    this.log(`base:migrate --from ${flags.from} --to ${flags.to}!`);
  }
}
