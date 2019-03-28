import { command, remote, url } from 'cheatsheet/command';

import { CommandGroupDescriptor } from '../CommandGroupDescriptor';

const REPO_URL = url('https://example.com/some-repo');

const remoteCommands: CommandGroupDescriptor = {
  id: 'remote',
  title: 'Remotes',

  commands: [
    {
      command: [ command('remote'), '-v' ],
      description: [ 'List all existing remotes with their URLs.' ],
      shortcut: [ command('gr') ],
    },
    {
      command: [ command('remote'), 'add', remote('some-remote'), REPO_URL ],
      description: [ 'Add remote ', remote('some-remote'), ' by its URL.' ],
      shortcut: [ command('gr'), 'add', remote('some-remote'), REPO_URL ],
    },
    {
      command: [ command('remote'), 'show', remote('some-remote') ],
      description: [ 'Show remote\'s information: its URLs, main branch and remote branches.' ],
      shortcut: [ command('gr'), 'show' ],
    },
    {
      command: [ command('remote'), 'rename', remote('old-remote-name'), remote('new-remote-name') ],
      description: [ 'Rename a remote.' ],
      shortcut: [ command('gr'), 'rename', remote('old-remote-name'), remote('new-remote-name') ],
    },
    {
      command: [ command('remote'), 'rm', remote('some-remote') ],
      description: [ 'Remove a remote.' ],
      shortcut: [ command('gr'), 'rm', remote('some-remote') ],
    },
  ],
};

export default remoteCommands;
