import { command, ref } from 'cheatsheet/command';

import { CommandGroupDescriptor } from '../CommandGroupDescriptor';

const rebaseCommands: CommandGroupDescriptor = {
  id: 'rebase',
  title: 'Rebase',

  commands: [
    {
      command: [ command('rebase'), ref('master'), ref('[branch]') ],
      description: [
        'Replay work in ', ref('branch'), ' (or in the current branch, if none specified) on top of ', ref('master'),
        '. That is, find the most recent common parent commit of both branches and re-apply all commits in ', 
        ref('branch'), ' since then on top of the latest commit of ', ref('master'), '.',
      ],
      shortcut: [ command('grb'), ref('master'), ref('[branch]') ],
    },
  ],
};

export default rebaseCommands;
