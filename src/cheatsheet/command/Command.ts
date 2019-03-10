import { CommandPart } from './CommandPart';

export class Command {
  public readonly scmBreezeShortcut: Array<CommandPart | string>;
  public readonly command: Array<CommandPart | string>;
  public readonly description: Array<CommandPart | string>;

  constructor(scmBreezeShortcut: Array<CommandPart | string>,
              commandParts: Array<CommandPart | string>,
              descriptionParts: Array<CommandPart | string>) {
    this.scmBreezeShortcut = scmBreezeShortcut;
    this.command = commandParts;
    this.description = descriptionParts;
  }
}
