import { Command } from './Command';

export class CommandGroup {
  readonly title: string;
  readonly commands: Command[];

  constructor (title: string, commands: Command[]) {
    this.title = title;
    this.commands = commands;
  }
}
