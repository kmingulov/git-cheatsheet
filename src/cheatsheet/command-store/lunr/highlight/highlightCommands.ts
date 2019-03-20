import { Command } from 'cheatsheet/command';

import { highlightCommand } from './highlightCommand';

/**
 * Highlights the given terms in the provided commands. See {@link highlight} for more details.
 * @param commands commands to highlight
 * @param terms search terms
 */
export function highlightCommands(commands: ReadonlyArray<Command>,
                                  terms: ReadonlyArray<string>): ReadonlyArray<Command> {
  return commands.map(command => highlightCommand(command, terms));
}
