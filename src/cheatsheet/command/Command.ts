import { CommandPart } from './CommandPart';

export class Command {
  readonly scmBreezeShortcut: string;
  readonly commandParts: (CommandPart | string)[];
  readonly descriptionParts: (CommandPart | string)[];

  constructor (scmBreezeShortcut: string,
               commandParts: (CommandPart | string)[],
               descriptionParts: (CommandPart | string)[]) {
    this.scmBreezeShortcut = scmBreezeShortcut;
    this.commandParts = commandParts;
    this.descriptionParts = descriptionParts;
  }
}
