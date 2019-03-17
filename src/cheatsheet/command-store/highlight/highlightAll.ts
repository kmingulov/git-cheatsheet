import { Command } from 'cheatsheet/command';

import { highlight } from './highlight';

export const highlightAll = (commands: Command[], terms: string[]): Command[] => {
  return commands.map(command => highlight(command, terms));
};
