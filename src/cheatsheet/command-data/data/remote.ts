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
  ],
};

export default remoteCommands;
