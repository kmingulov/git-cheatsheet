import { Command, CommandGroup } from 'cheatsheet/command';

import { CommandDescriptor } from './CommandDescriptor';
import { CommandGroupDescriptor } from './CommandGroupDescriptor';

export const commandFromDescriptor = (descriptor: CommandDescriptor, groupName: string, id: number): Command =>
  new Command(groupName + '-' + id, descriptor.command, descriptor.description, descriptor.shortcut);

export const groupFromDescriptor = (descriptor: CommandGroupDescriptor): CommandGroup =>
  new CommandGroup(
    descriptor.title,
    descriptor.commands.map((cmdDescriptor, id) =>
      commandFromDescriptor(cmdDescriptor, descriptor.id, id),
    ),
  );
