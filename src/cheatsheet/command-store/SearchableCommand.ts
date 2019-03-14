import { Command } from '../command/Command';
import { CommandPart } from '../command/CommandPart';

const partsToString = (parts: CommandPart[], delimeter: string): string =>
  parts.map(part => part.text).join(delimeter);

export class SearchableCommand {
  public readonly id: string;
  public readonly command: string;
  public readonly description: string;
  public readonly scmBreezeShortcut: string;

  constructor(command: Command) {
    this.id = command.id;
    this.command = partsToString(command.command, ' ');
    this.description = partsToString(command.description, '');
    this.scmBreezeShortcut = partsToString(command.scmBreezeShortcut, ' ');
  }
}
