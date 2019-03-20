import { Command, CommandPart, CommandPartType } from 'cheatsheet/command';

const highlightPart = (part: CommandPart, regexp: RegExp): ReadonlyArray<CommandPart> =>
  part.text.split(regexp)
    .filter(text => text !== '')
    .map(item =>
      item.match(regexp)
        ? new CommandPart(CommandPartType.HIGHLIGHT, item)
        : new CommandPart(part.role, item),
    );

const highlightParts = (parts: ReadonlyArray<CommandPart>, regexp: RegExp): ReadonlyArray<CommandPart> =>
  parts
    .map(part => highlightPart(part, regexp))
    .reduce((theseParts, otherParts) => theseParts.concat(otherParts), []);

/**
 * Highlights the given search terms in the provided command. All occurrences of the given terms will lose their
 * orinal formatting (as defined by {@link CommandPart}) and will be wrapped into {@link highlight}
 * {@link CommandPart}.ig
 * @param command command to highlight
 * @param terms search terms
 */
export function highlightCommand(command: Command, terms: ReadonlyArray<string>): Command {
  const regexp = new RegExp('(' + terms.join('|') + ')', 'i');

  const highlightedCommand = highlightParts(command.command, regexp);
  const highlightedDescription = highlightParts(command.description, regexp);
  const highlightedShortcut = highlightParts(command.scmBreezeShortcut, regexp);

  return new Command(command.id, highlightedCommand, highlightedDescription, highlightedShortcut);
}
