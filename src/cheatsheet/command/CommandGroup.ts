import { Command } from './Command';

/**
 * Class representing a semantically bound group of commands.
 */
export class CommandGroup {
  /** Group ID. */
  public readonly id: string;
  /** Group title. */
  public readonly title: string;
  /** Array of commands. */
  public readonly commands: ReadonlyArray<Command>;

  /**
   * Constructs a new {@link CommandGroup}.
   * @param id group ID
   * @param title group title
   * @param commands array of commands
   */
  constructor(id: string,
              title: string,
              commands: ReadonlyArray<Command>) {
    this.id = id;
    this.title = title;
    this.commands = commands;
  }
}
