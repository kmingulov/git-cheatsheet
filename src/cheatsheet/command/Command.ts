import { CommandPart, none } from './CommandPart';

const partStringArrayToPartArray = (array: Array<CommandPart | string>): CommandPart[] =>
  array.map(item => typeof(item) === 'string' ? none(item) : item);

export class Command {
  public readonly id: string;
  public readonly command: CommandPart[];
  public readonly description: CommandPart[];
  public readonly scmBreezeShortcut: CommandPart[];

  constructor(id: string,
              commandParts: Array<CommandPart | string>,
              descriptionParts: Array<CommandPart | string>,
              scmBreezeShortcut?: Array<CommandPart | string>) {
    this.id = id;
    this.command = partStringArrayToPartArray(commandParts);
    this.description = partStringArrayToPartArray(descriptionParts);
    this.scmBreezeShortcut = partStringArrayToPartArray(scmBreezeShortcut || []);
  }
}
