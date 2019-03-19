/**
 * Enum describing all possible, semantically separate, parts of a command or its description. This enum should be used
 * together with {@link CommandPart} affecting how command parts are treated.
 */
export enum CommandPartType {
  /**
   * Type without any particular meaning. That is, text of a {@link CommandPart} with such a type can be treated as is.
   */
  NONE = 'NONE',

  /**
   * Type indicating a shell command or (in Git context) a Git subcommand (like `add`, `commit`, etc).
   */
  COMMAND = 'COMMAND',

  /**
   * Type indicating a Git remote name.
   */
  REMOTE = 'REMOTE',

  /**
   * Type indicating any URL.
   */
  URL = 'URL',

  /**
   * Type indicating any Git reference: branches, commits, tags and special references like `HEAD`.
   */
  REF = 'REF',

  /**
   * Type indicating a file in the working directory.
   */
  FILE = 'FILE',

  /**
   * Type indicating a string parameter passed to the command, usually enclosed in quote marks `"`.
   */
  STRING = 'STRING',

  /**
   * Type for pseudo-{@link CommandPart}s used for search highlighting.
   */
  HIGHLIGHT = 'HIGHLIGHT',
}
