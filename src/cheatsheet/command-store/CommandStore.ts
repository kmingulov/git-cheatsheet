import { Command, CommandGroup } from 'cheatsheet/command';

export interface CommandStore {
  getAll(): CommandGroup[];
  search(searchQuery: string): Command[];
}
