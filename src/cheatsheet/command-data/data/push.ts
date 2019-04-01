import { command, ref, remote } from 'cheatsheet/command';

import { CommandGroupDescriptor } from '../CommandGroupDescriptor';

const pushCommands: CommandGroupDescriptor = {
  id: 'push',
  title: 'Pushing Changes',

  commands: [
    {
      command: [ command('push'), remote('remote'), ref('tag') ],
      description: [ 'Push ', ref('tag'), ' to ', remote('remote'), '.' ],
      shortcut: [ command('gps'), remote('remote'), ref('tag') ],
    },
    {
      command: [ command('push'), remote('remote'), '--tags' ],
      description: [ 'Push all tags to ', remote('remote'), '.' ],
      shortcut: [ command('gps'), remote('remote'), '--tags' ],
    },
  ],
};

export default pushCommands;
