import { Command, CommandGroup } from 'cheatsheet/command';

/**
 * Store containing {@link Command}s allowing fetching and searching them.
 */
export interface CommandStore {
  /**
   * Gets all {@link CommandGroup}s defined in this store.
   * @returns an array with all {@link CommandGroup}s
   */
  getAll(): ReadonlyArray<CommandGroup>;

  /**
   * Searches for {@link Command}s with a given search query. The returned commands are highlighted, that is, the
   * matches in the commands are wrapped into {@link highlight} {@link CommandPart}.
   * @param searchQuery search query
   * @returns an array of found {@link Command}s
   */
  search(searchQuery: string): ReadonlyArray<Command>;
}
