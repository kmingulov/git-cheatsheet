import Type from './CommandPartType';

export class CommandPart {
  readonly role: Type;
  readonly text: string;

  constructor (role: Type, text: string) {
    this.role = role;
    this.text = text;
  }
}

export const command = (cmd: string) => new CommandPart(Type.COMMAND, cmd);

export const remote = (cmd: string) => new CommandPart(Type.REMOTE, cmd);
export const url = (cmd: string) => new CommandPart(Type.URL, cmd);

export const branch = (cmd: string) => new CommandPart(Type.BRANCH, cmd);
export const commit = (cmd: string) => new CommandPart(Type.COMMIT, cmd);
export const ref = (cmd: string) => new CommandPart(Type.REF, cmd);

export const file = (cmd: string) => new CommandPart(Type.FILE, cmd);
