import { command, remote } from 'cheatsheet/command';

import { CommandGroupDescriptor } from '../CommandGroupDescriptor';

const pullCommands: CommandGroupDescriptor = {
  id: 'pull',
  title: 'Pulling Changes',

  commands: [
    {
      command: [ command('fetch'), remote('[some-remote]') ],
      description: [
        'Fetch data from the repote repository ', remote('some-remote'), ': all objects and refs (like branch names ' +
        'and tags). Remote changes aren\'t integrated with your own changes (for that use ', command('pull'), ' or ',
        command('merge'), '). If remote is omitted, ', remote('origin'), ' is used.' ],
      shortcut: [ command('gf'), remote('[some-remote]') ],
    },
  ],
};

export default pullCommands;