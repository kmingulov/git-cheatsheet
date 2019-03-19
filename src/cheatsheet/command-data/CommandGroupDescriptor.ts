import { CommandDescriptor } from './CommandDescriptor';

export interface CommandGroupDescriptor {
  readonly id: string;
  readonly title: string;
  readonly commands: ReadonlyArray<CommandDescriptor>;
}
