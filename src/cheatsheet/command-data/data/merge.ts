import { command, ref } from 'cheatsheet/command';

import { CommandGroupDescriptor } from '../CommandGroupDescriptor';

const mergeCommands: CommandGroupDescriptor = {
  id: 'merge',
  title: 'Merge',

  commands: [
    {
      command: [ command('merge'), ref('branch') ],
      description: [ 'Merge ', ref('branch'), ' into the current branch.' ],
      shortcut: [ command('gm'), ref('branch') ],
    },
  ],
};

export default mergeCommands;
