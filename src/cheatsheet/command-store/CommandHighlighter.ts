import { Command } from 'cheatsheet/command/Command';
import { CommandPart } from 'cheatsheet/command/CommandPart';
import Type from 'cheatsheet/command/CommandPartType';

const highlightPart = (part: CommandPart, regexp: RegExp): CommandPart[] =>
  part.text.split(regexp)
    .map(item =>
      item.match(regexp)
        ? new CommandPart(Type.HIGHLIGHT, item)
        : new CommandPart(part.role, item),
    );

const highlightParts = (parts: CommandPart[], regexp: RegExp): CommandPart[] =>
  parts
    .map(part => highlightPart(part, regexp))
    .reduce((theseParts, otherParts) => theseParts.concat(otherParts), []);

export class CommandHighlighter {

  public static highlight(command: Command, terms: string[]): Command {
    const regexp = new RegExp('(' + terms.join('|') + ')', 'i');

    const highlightedCommand = highlightParts(command.command, regexp);
    const highlightedDescription = highlightParts(command.description, regexp);
    const highlightedShortcut = highlightParts(command.scmBreezeShortcut, regexp);

    return new Command(command.id, highlightedCommand, highlightedDescription, highlightedShortcut);
  }

  public static highlightAll(commands: Command[], terms: string[]): Command[] {
    return commands.map(command => this.highlight(command, terms));
  }

}
