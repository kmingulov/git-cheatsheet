import { CommandPart } from './CommandPart';

export class Command {
  public readonly scmBreezeShortcut: Array<CommandPart | string>;
  public readonly commandParts: Array<CommandPart | string>;
  public readonly descriptionParts: Array<CommandPart | string>;

  constructor(scmBreezeShortcut: Array<CommandPart | string>,
              commandParts: Array<CommandPart | string>,
              descriptionParts: Array<CommandPart | string>) {
    this.scmBreezeShortcut = scmBreezeShortcut;
    this.commandParts = commandParts;
    this.descriptionParts = descriptionParts;
  }
}
