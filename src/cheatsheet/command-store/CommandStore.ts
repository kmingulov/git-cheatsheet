import { Command, CommandGroup } from 'cheatsheet/command';

export interface CommandStore {
  getAll(): ReadonlyArray<CommandGroup>;
  search(searchQuery: string): ReadonlyArray<Command>;
}
