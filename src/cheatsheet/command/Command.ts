import { CommandPart } from './CommandPart';

export class Command {
  public readonly command: Array<CommandPart | string>;
  public readonly description: Array<CommandPart | string>;
  public readonly scmBreezeShortcut: Array<CommandPart | string>;

  constructor(commandParts: Array<CommandPart | string>,
              descriptionParts: Array<CommandPart | string>,
              scmBreezeShortcut?: Array<CommandPart | string>) {
    this.command = commandParts;
    this.description = descriptionParts;
    this.scmBreezeShortcut = scmBreezeShortcut || [];
  }
}
