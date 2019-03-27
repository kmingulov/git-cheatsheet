import { Command, CommandGroup } from 'cheatsheet/command';
import { interleave } from 'cheatsheet/util/array-utils';

import { CommandDescriptor } from './CommandDescriptor';
import { CommandGroupDescriptor } from './CommandGroupDescriptor';

/**
 * Constructs a new command by its descriptor, its group's name and an unique ID. The created group will have ID of form
 * `${groupName}-${id}`, and its command and shortcut will be interleaved with spaces.
 * @param descriptor command descriptor
 * @param groupName command's group name
 * @param id unique ID
 */
export function commandFromDescriptor(descriptor: CommandDescriptor, groupName: string, id: number): Command {
  return new Command(
    `${groupName}-${id}`,
    interleave(descriptor.command, ' '),
    descriptor.description,
    interleave(descriptor.shortcut || [], ' '),
  );
}

/**
 * Constructs a new command group by its descriptor.
 * @param descriptor group's descriptor
 */
export function groupFromDescriptor(descriptor: CommandGroupDescriptor): CommandGroup {
  return new CommandGroup(
    descriptor.id,
    descriptor.title,
    descriptor.commands.map((cmdDescriptor, id) =>
      commandFromDescriptor(cmdDescriptor, descriptor.id, id),
    ),
  );
}
