import { command, remote } from 'cheatsheet/command';

import { CommandGroupDescriptor } from '../CommandGroupDescriptor';

const pullCommands: CommandGroupDescriptor = {
  id: 'pull',
  title: 'Pulling Changes',

  commands: [
    {
      command: [ command('fetch'), remote('[remote]') ],
      description: [
        'Fetch data from the remote repository ', remote('remote'), ': all objects and refs (like branch names ' +
        'and tags). Remote changes aren\'t integrated with your own changes and your working directory isn\'t ' +
        'affected (to merge remote changes with our own, use ', command('pull'), ' or ', command('merge'), '). If ',
        remote('remote'), ' is omitted, ', remote('origin'), ' is used.',
      ],
      shortcut: [ command('gf'), remote('[remote]') ],
    },
    {
      command: [ command('pull') ],
      description: [
        'Fetch data from the default remote repository and merge changes in your current branch with changes in the ' +
        'remote branch.',
      ],
      shortcut: [ command('gpl') ],
    },
    {
      command: [ command('pull'), '--rebase' ],
      description: [
        'Fetch data from the default remote repository and rebase changes in your current branch on top of the last ' +
        'commit in the remote branch.',
      ],
      shortcut: [ command('gplr') ],
    },
  ],
};

export default pullCommands;
