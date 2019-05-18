import { command, ref } from 'cheatsheet/command';

import { CommandGroupDescriptor } from '../CommandGroupDescriptor';

const mergeCommands: CommandGroupDescriptor = {
  id: 'merge',
  title: 'Merge',

  commands: [
    {
      command: [ command('merge'), ref('branch') ],
      description: [
        'Merge ', ref('branch'), ' into the current branch. If the current branch head is an ancestor of ',
        ref('branch'), ', then the current branch will be fast-forwarded and will point to the same commit as ',
        ref('branch'), '. Otherwise a merge commit will be created with parents being both branches\' heads.',
      ],
      shortcut: [ command('gm'), ref('branch') ],
    },
    {
      command: [ command('merge'), '--no-ff', ref('branch') ],
      description: [
        'Merge ', ref('branch'), ' into the current branch with a merge commit even if fast-forward is possible.',
      ],
      shortcut: [ command('gmnff'), ref('branch') ],
    },
    {
      command: [ command('merge'), '--ff-only', ref('branch') ],
      description: [
        'Merge ', ref('branch'), ' into the current branch using fast-forward only. If fast-forward isn\'t possible, ' +
        'the command will fail.',
      ],
      shortcut: [ command('gmnff'), ref('branch') ],
    },
  ],
};

export default mergeCommands;
