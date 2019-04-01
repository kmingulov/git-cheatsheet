import { command, ref } from 'cheatsheet/command';

import { CommandGroupDescriptor } from '../CommandGroupDescriptor';

const branchCommands: CommandGroupDescriptor = {
  id: 'branch',
  title: 'Branching',

  commands: [
    {
      command: [ command('branch'), ref('branch') ],
      description: [
        'Create a new branch ', ref('branch'), ' pointing to the current ', ref('HEAD'), ' without switching to it.',
      ],
      shortcut: [ command('gb'), ref('branch') ],
    },
    {
      command: [ command('checkout'), ref('branch') ],
      description: [ 'Switch to ', ref('branch'), '.' ],
      shortcut: [ command('gcb'), ref('branch-name') ],
    },
    {
      command: [ command('checkout'), '-b', ref('branch') ],
      description: [
        'Create a new branch ', ref('branch'), ' pointing to the current ', ref('HEAD'), ' and switch to it.',
      ],
      shortcut: [ command('gcb'), ref('branch') ],
    },
  ],
};

export default branchCommands;
