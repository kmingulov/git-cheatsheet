import { CommandDescriptor } from './CommandDescriptor';

export interface CommandGroupDescriptor {
  id: string;
  title: string;
  commands: CommandDescriptor[];
}
