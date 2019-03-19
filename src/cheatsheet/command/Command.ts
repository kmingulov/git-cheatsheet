import { CommandPart, none } from './CommandPart';

const partStringArrayToPartArray = (array: Array<CommandPart | string>): CommandPart[] =>
  array.map(item => typeof(item) === 'string' ? none(item) : item);

/**
 * Class representing a single Git command. Each command consists of an unique ID, the command itself, its description
 * and SCM Breeze shortcut.
 */
export class Command {
  /** Unique ID. */
  public readonly id: string;
  /** Command itself represented as an array of {@link CommandPart}s. */
  public readonly command: CommandPart[];
  /** Command's description represented as an array of {@link CommandPart}s. */
  public readonly description: CommandPart[];
  /** SCM Breeze shortcut for this command represented as an array of {@link CommandPart}s. */
  public readonly scmBreezeShortcut: CommandPart[];

  /**
   * Constructs a new {@link Command}. Command itself, its description and shortcut are represented by arrays of
   * {@link CommandPart}s or strings. Each string in the array will be converted to a {@link none} pseudo-part.
   * @param id unique ID
   * @param commandParts command represented as an array
   * @param descriptionParts description represented as an array
   * @param scmBreezeShortcut SCM Breeze shortcut represented as an array
   */
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
