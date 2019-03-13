import { Command } from '../command/Command';
import { CommandPart } from '../command/CommandPart';

const partToString = (part: CommandPart | string): string =>
  (typeof part === 'string') ? part : part.text;

const partsToString = (parts: Array<CommandPart | string>, delimeter: string): string =>
  parts.map(partToString).join(delimeter);

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
