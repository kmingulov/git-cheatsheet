import { Command, CommandGroup } from 'cheatsheet/command';

import { CommandDescriptor } from './CommandDescriptor';
import { CommandGroupDescriptor } from './CommandGroupDescriptor';

import basicCommands from './data/basic';
import commitCommands from './data/commit';
import configCommands from './data/config';
import diffCommands from './data/diff';
import logCommands from './data/log';
import remoteCommands from './data/remote';

const groupDescriptors = [
  basicCommands,
  commitCommands,
  diffCommands,
  logCommands,
  remoteCommands,
  configCommands,
];

const commandFromDescriptor = (descriptor: CommandDescriptor, groupName: string, id: number): Command =>
  new Command(groupName + '-' + id, descriptor.command, descriptor.description, descriptor.shortcut);

const groupFromDescriptor = (descriptor: CommandGroupDescriptor): CommandGroup =>
  new CommandGroup(
    descriptor.title,
    descriptor.commands.map((cmdDescriptor, id) =>
      commandFromDescriptor(cmdDescriptor, descriptor.id, id),
    ),
  );

export default groupDescriptors.map(groupFromDescriptor);
