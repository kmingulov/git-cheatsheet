import { Command } from './Command';

export class CommandGroup {
  public readonly title: string;
  public readonly commands: Command[];

  constructor(title: string, commands: Command[]) {
    this.title = title;
    this.commands = commands;
  }
}
