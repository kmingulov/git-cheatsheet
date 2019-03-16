import { command, file, ref } from 'cheatsheet/command';

import { CommandGroupDescriptor } from '../CommandGroupDescriptor';

const diffCommands: CommandGroupDescriptor = {
  id: 'diff',
  title: 'Diff',

  commands: [
    {
      command: [ command('diff') ],
      description: [ 'Show diff for all tracked and changed (but not yet staged) files.' ],
      shortcut: [ command('gd') ],
    },
    {
      command: [ command('diff'), file('file') ],
      description: [ 'Show diff for ', file('file'), '.' ],
      shortcut: [ command('gd'), file('file') ],
    },
    {
      command: [ command('diff'), '--staged' ],
      description: [ 'Show diff between the staging area and ', ref('HEAD'), '.' ],
      shortcut: [ command('gd'), file('--staged') ],
    },
  ],
};

export default diffCommands;
