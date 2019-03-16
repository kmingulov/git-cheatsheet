import Type from './CommandPartType';

export class CommandPart {
  public readonly role: Type;
  public readonly text: string;

  constructor(role: Type, text: string) {
    this.role = role;
    this.text = text;
  }
}

export const none = (part: string) => new CommandPart(Type.NONE, part);

export const command = (part: string) => new CommandPart(Type.COMMAND, part);

export const remote = (part: string) => new CommandPart(Type.REMOTE, part);
export const url = (part: string) => new CommandPart(Type.URL, part);

export const ref = (part: string) => new CommandPart(Type.REF, part);

export const file = (part: string) => new CommandPart(Type.FILE, part);

export const str = (part: string) => new CommandPart(Type.STRING, part);

export const highlight = (part: string | CommandPart) => {
  const text = (typeof part === 'string') ? part : part.text;
  return new CommandPart(Type.HIGHLIGHT, text);
};
