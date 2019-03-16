import { CommandPart } from 'cheatsheet/command';

export interface CommandDescriptor {
  command: Array<CommandPart | string>;
  description: Array<CommandPart | string>;
  shortcut?: Array<CommandPart | string>;
}
