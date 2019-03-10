import { Command } from '../command/Command';
import { CommandGroup } from '../command/CommandGroup';
import { CommandPart } from '../command/CommandPart';

export class CommandStore {
  private readonly commandGroups: CommandGroup[];

  constructor(commandGroups: CommandGroup[]) {
    this.commandGroups = commandGroups;
  }

  public getAll(): CommandGroup[] {
    return this.commandGroups;
  }

  public search(searchTerm: string): CommandGroup[] {
    return this.commandGroups
      .map(group => new CommandGroup(group.title, this.searchCommands(searchTerm, group.commands)))
      .filter(group => group.commands.length !== 0);
  }

  private searchCommands(searchTerm: string, commands: Command[]): Command[] {
    return commands.filter(command => this.commandMatches(searchTerm, command));
  }

  private commandMatches(searchTerm: string, command: Command): boolean {
    return command.command.some(part => this.partMatches(searchTerm, part))
      || command.description.some(part => this.partMatches(searchTerm, part))
      || command.scmBreezeShortcut.some(part => this.partMatches(searchTerm, part));
  }

  private partMatches(searchTerm: string, part: CommandPart | string) {
    const text = typeof(part) === 'string' ? part : part.text;
    return text.includes(searchTerm);
  }
}
