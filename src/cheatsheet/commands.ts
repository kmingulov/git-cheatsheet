import { Command } from './command/Command';
import { CommandGroup } from './command/CommandGroup';
import { command, file, url } from './command/CommandPart';

const CLONE_AND_REMOTES: CommandGroup = new CommandGroup(
  'Clone & Remotes',
  [
    new Command(
      '',
      [ command('clone'), url('https://github.com/some-user/some-repo'), file('dir') ],
      [ 'Clone an existing repository by its URL to ', file('dir'), '.' ],
    ),

    new Command(
      '',
      [ command('remote'), '-v' ],
      [ 'List all existing remotes with their URLs.' ],
    ),

    new Command(
      '',
      [ command('remote'), 'add', url('https://github.com/some-user/some-repo') ],
      ['Add a new remote by its URL.'],
    ),
  ],
);

const COMMAND_GROUPS: CommandGroup[] = [
  CLONE_AND_REMOTES,
];

export default COMMAND_GROUPS;
