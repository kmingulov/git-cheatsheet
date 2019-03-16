import { CommandPartType } from './CommandPartType';

export class CommandPart {
  public readonly role: CommandPartType;
  public readonly text: string;

  constructor(role: CommandPartType, text: string) {
    this.role = role;
    this.text = text;
  }
}

export const none = (part: string) => new CommandPart(CommandPartType.NONE, part);

export const command = (part: string) => new CommandPart(CommandPartType.COMMAND, part);

export const remote = (part: string) => new CommandPart(CommandPartType.REMOTE, part);
export const url = (part: string) => new CommandPart(CommandPartType.URL, part);

export const ref = (part: string) => new CommandPart(CommandPartType.REF, part);

export const file = (part: string) => new CommandPart(CommandPartType.FILE, part);

export const str = (part: string) => new CommandPart(CommandPartType.STRING, part);

export const highlight = (part: string | CommandPart) => {
  const text = (typeof part === 'string') ? part : part.text;
  return new CommandPart(CommandPartType.HIGHLIGHT, text);
};
