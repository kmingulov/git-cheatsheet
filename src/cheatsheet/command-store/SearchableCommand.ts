import { Command } from '../command/Command';
import { CommandPart } from '../command/CommandPart';

const partToString = (part: CommandPart | string): string =>
  (typeof part === 'string') ? part : part.text;

export class SearchableCommand {
  public readonly id: string;
  public readonly command: string[];
  public readonly description: string[];
  public readonly scmBreezeShortcut: string[];

  constructor(command: Command) {
    this.id = command.id;
    this.command = command.command.map(partToString);
    this.description = command.description.map(partToString);
    this.scmBreezeShortcut = command.scmBreezeShortcut.map(partToString);
  }
}
