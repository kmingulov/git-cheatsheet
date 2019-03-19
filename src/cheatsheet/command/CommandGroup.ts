import { Command } from './Command';

/**
 * Class representing a semantically bound group of commands.
 */
export class CommandGroup {
  /** Group title. */
  public readonly title: string;
  /** Array of commands. */
  public readonly commands: Command[];

  /**
   * Constructs a new {@link CommandGroup}.
   * @param title group title
   * @param commands array of commands
   */
  constructor(title: string, commands: Command[]) {
    this.title = title;
    this.commands = commands;
  }
}
