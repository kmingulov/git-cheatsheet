import { CommandPart } from 'cheatsheet/command';

/**
 * Interface for a declaration for a {@link Command}. To convert this to {@link Command}, use
 * {@link commandFromDescriptor}.
 */
export interface CommandDescriptor {
  /**
   * Command represented as an array of either {@link CommandPart}s or strings. Spaces between the parts should be
   * omitted. They are inserted automatically by {@link commandFromDescriptor}.
   */
  command: Array<CommandPart | string>;

  /**
   * Command's description represented as an array of either {@link CommandPart}s or strings.
   */
  description: Array<CommandPart | string>;

  /**
   * Command's shortuct represented as an array of either {@link CommandPart}s or strings. Spaces between the parts
   * should be omitted. They are inserted automatically by {@link commandFromDescriptor}.
   */
  shortcut?: Array<CommandPart | string>;
}
