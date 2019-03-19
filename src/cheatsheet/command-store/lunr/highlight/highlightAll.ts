import { Command } from 'cheatsheet/command';

import { highlight } from './highlight';

export function highlightAll(commands: ReadonlyArray<Command>, terms: ReadonlyArray<string>): ReadonlyArray<Command> {
  return commands.map(command => highlight(command, terms));
}
