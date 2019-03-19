import { Command } from 'cheatsheet/command';

import { highlight } from './highlight';

export const highlightAll = (commands: ReadonlyArray<Command>, terms: string[]): ReadonlyArray<Command> => {
  return commands.map(command => highlight(command, terms));
};
