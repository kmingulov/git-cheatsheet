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

export function highlight(command: Command, terms: ReadonlyArray<string>): Command {
  const regexp = new RegExp('(' + terms.join('|') + ')', 'i');

  const highlightedCommand = highlightParts(command.command, regexp);
  const highlightedDescription = highlightParts(command.description, regexp);
  const highlightedShortcut = highlightParts(command.scmBreezeShortcut, regexp);

  return new Command(command.id, highlightedCommand, highlightedDescription, highlightedShortcut);
}
