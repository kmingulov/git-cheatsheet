import { command, ref } from 'cheatsheet/command';

import { CommandGroupDescriptor } from '../CommandGroupDescriptor';

const branchCommands: CommandGroupDescriptor = {
  id: 'branch',
  title: 'Branching',

  commands: [
    {
      command: [ command('branch') ],
      description: [ 'List all existing branches. The current branch is marked with an asterisk.' ],
      shortcut: [ command('gb') ],
    },
    {
      command: [ command('branch'), '-v' ],
      description: [ 'List all existing branches together with a last commit.' ],
      shortcut: [ command('gb'), '-v' ],
    },
    {
      command: [ command('branch'), '--merged/--no-merged' ],
      description: [ 'List all branches which are merged or non-merged to the current commit.' ],
      shortcut: [ command('gb'), '--merged/--no-merged' ],
    },
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
    {
      command: [ command('branch'), '-d', ref('branch') ],
      description: [ 'Delete branch ', ref('branch'), ' which is merged to the current branch.' ],
      shortcut: [ command('gbd'), ref('branch') ],
    },
    {
      command: [ command('branch'), '-D', ref('branch') ],
      description: [ 'Delete branch ', ref('branch'), ' even if it\'s not merged to the current branch.' ],
      shortcut: [ command('gbD'), ref('branch') ],
    },
  ],
};

export default branchCommands;
