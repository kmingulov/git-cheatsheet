import { Command, CommandGroup } from 'cheatsheet/command';
import { interleave } from 'cheatsheet/util/arrayUtils';

import { CommandDescriptor } from './CommandDescriptor';
import { CommandGroupDescriptor } from './CommandGroupDescriptor';

export const commandFromDescriptor = (descriptor: CommandDescriptor, groupName: string, id: number): Command =>
  new Command(
    groupName + '-' + id,
    interleave(descriptor.command, ' '),
    descriptor.description,
    interleave(descriptor.shortcut || [], ' '),
  );

export const groupFromDescriptor = (descriptor: CommandGroupDescriptor): CommandGroup =>
  new CommandGroup(
    descriptor.title,
    descriptor.commands.map((cmdDescriptor, id) =>
      commandFromDescriptor(cmdDescriptor, descriptor.id, id),
    ),
  );
