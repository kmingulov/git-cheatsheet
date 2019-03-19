import { Command, CommandPart } from 'cheatsheet/command';

const partsToString = (parts: ReadonlyArray<CommandPart>): string =>
  parts.map(part => part.text).join('');

export class SearchableCommand {
  public readonly id: string;
  public readonly command: string;
  public readonly description: string;
  public readonly scmBreezeShortcut: string;

  constructor(command: Command) {
    this.id = command.id;
    this.command = partsToString(command.command);
    this.description = partsToString(command.description);
    this.scmBreezeShortcut = partsToString(command.scmBreezeShortcut);
  }
}
