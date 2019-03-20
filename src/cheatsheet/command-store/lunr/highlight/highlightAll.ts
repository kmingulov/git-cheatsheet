import { Command } from 'cheatsheet/command';

import { highlight } from './highlight';

/**
 * Highlights the given terms in the provided commands. See {@link highlight} for more details.
 * @param commands commands to highlight
 * @param terms search terms
 */
export function highlightAll(commands: ReadonlyArray<Command>, terms: ReadonlyArray<string>): ReadonlyArray<Command> {
  return commands.map(command => highlight(command, terms));
}
