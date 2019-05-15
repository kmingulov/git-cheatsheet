import { command, ref, remote } from 'cheatsheet/command';

import { CommandGroupDescriptor } from '../CommandGroupDescriptor';

const pushCommands: CommandGroupDescriptor = {
  id: 'push',
  title: 'Pushing Changes',

  commands: [
    {
      command: [ command('push'), remote('remote'), ref('branch'), '/', ref('tag') ],
      description: [ 'Push ', ref('branch'), ' or ', ref('tag'), ' to ', remote('remote'), '.' ],
      shortcut: [ command('gps'), remote('remote'), ref('branch'), '/', ref('tag') ],
    },
    {
      command: [ command('push'), remote('remote'), '--tags' ],
      description: [ 'Push all tags to ', remote('remote'), '.' ],
      shortcut: [ command('gps'), remote('remote'), '--tags' ],
    },
  ],
};

export default pushCommands;
