import { Command, CommandPart } from 'cheatsheet/command';

const partsToString = (parts: ReadonlyArray<CommandPart>): string =>
  parts.map(part => part.text).join('');

/**
 * A searchable representation of {@link Command}: all formatting is stripped out and only contents of the command, its
 * description and its shortcut are left. This allows to index and search commands.
 */
export class SearchableCommand {
  /** Command ID. */
  public readonly id: string;
  /** Command without any formatting. */
  public readonly command: string;
  /** Command's description without any formatting. */
  public readonly description: string;
  /** Command's shortcut without any formatting. */
  public readonly scmBreezeShortcut: string;

  /**
   * Creates a new {@link SearchableCommand} by a {@link Command}. A searchable command is obtained from an ordinary
   * command by removing all formatting, that is all {@link CommandPart}s in the command are replaced by their textual
   * representation.
   * @param command command
   */
  constructor(command: Command) {
    this.id = command.id;
    this.command = partsToString(command.command);
    this.description = partsToString(command.description);
    this.scmBreezeShortcut = partsToString(command.scmBreezeShortcut);
  }
}
