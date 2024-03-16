import { Command } from '@oclif/core';

export default class Base extends Command {
  async run(): Promise<any> {
    this.log('base command!');
  }
}
