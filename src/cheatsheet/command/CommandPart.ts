import { CommandPartType } from './CommandPartType';

/**
 * Part of a Git command. Each command has a particular type {@link role} (see {@link CommandPartType}) and contents
 * {@link text}. Command's type affects how this command should be treated (e.g., during rendering).
 */
export class CommandPart {
  /** Type of this command part. */
  public readonly role: CommandPartType;
  /** Contents of this command part. */
  public readonly text: string;

  /**
   * Constructs a new command part.
   * @param role command part type
   * @param text command part contents
   */
  constructor(role: CommandPartType, text: string) {
    this.role = role;
    this.text = text;
  }
}

/**
 * Creates a new {@link CommandPart} with type {@link CommandPartType.NONE}.
 * @param part command part contents
 */
export const none = (part: string) => new CommandPart(CommandPartType.NONE, part);

/**
 * Creates a new {@link CommandPart} with type {@link CommandPartType.COMMAND}.
 * @param part command part contents
 */
export const command = (part: string) => new CommandPart(CommandPartType.COMMAND, part);

/**
 * Creates a new {@link CommandPart} with type {@link CommandPartType.REMOTE}.
 * @param part command part contents
 */
export const remote = (part: string) => new CommandPart(CommandPartType.REMOTE, part);

/**
 * Creates a new {@link CommandPart} with type {@link CommandPartType.URL}.
 * @param part command part contents
 */
export const url = (part: string) => new CommandPart(CommandPartType.URL, part);

/**
 * Creates a new {@link CommandPart} with type {@link CommandPartType.REF}.
 * @param part command part contents
 */
export const ref = (part: string) => new CommandPart(CommandPartType.REF, part);

/**
 * Creates a new {@link CommandPart} with type {@link CommandPartType.FILE}.
 * @param part command part contents
 */
export const file = (part: string) => new CommandPart(CommandPartType.FILE, part);

/**
 * Creates a new {@link CommandPart} with type {@link CommandPartType.STRING}.
 * @param part command part contents
 */
export const str = (part: string) => new CommandPart(CommandPartType.STRING, part);

/**
 * Creates a new {@link CommandPart} with type {@link CommandPartType.HIGHLIGHT}.
 * @param part command part contents
 */
export const highlight = (part: string | CommandPart) => {
  const text = (typeof part === 'string') ? part : part.text;
  return new CommandPart(CommandPartType.HIGHLIGHT, text);
};
