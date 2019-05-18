import { command, ref, remote } from 'cheatsheet/command';

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
      command: [ command('branch'), '-vv' ],
      description: [ 'List all existing branches together with a last commit and tracked remote branches.' ],
      shortcut: [ command('gb'), '-vv' ],
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
      command: [ command('branch'), '-d', ref('branch') ],
      description: [ 'Delete branch ', ref('branch'), ' which is merged to the current branch.' ],
      shortcut: [ command('gbd'), ref('branch') ],
    },
    {
      command: [ command('branch'), '-D', ref('branch') ],
      description: [ 'Delete branch ', ref('branch'), ' even if it\'s not merged to the current branch.' ],
      shortcut: [ command('gbD'), ref('branch') ],
    },
    {
      command: [ command('branch'), '--set-upstream-to/-u', ref('remote/branch') ],
      description: [
        'Set up the current branch to track the remote branch ', ref('remote/branch'), '. This allows to use ',
        command('git pull'), ' and ', command('git push'), ' directly from this branch without specifying a remote ',
        'branch.',
      ],
      shortcut: [ command('gb'), '--set-upstream-to/-u', ref('remote/branch') ],
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
      command: [ command('checkout'), '-b', ref('branch'), ref('remote/branch') ],
      description: [
        'Create a new branch ', ref('branch'), ' pointing to the same commit as the remote branch ',
        ref('remote/branch'), '. The new branch will be set up to track the remote branch.',
      ],
      shortcut: [ command('gcb'), ref('branch'), ref('remote/branch') ],
    },
    {
      command: [ command('checkout'), '--track', ref('remote/branch') ],
      description: [
        'Create a new branch ', ref('branch'), ' pointing to the same commit as the remote branch ',
        ref('remote/branch'), '. The new branch will be set up to track the remote branch.',
      ],
      shortcut: [ command('gco'), '--track', ref('remote/branch') ],
    },
    {
      command: [ command('push'), remote('remote'), '--delete', ref('branch') ],
      description: [
        'Remove a remote branch ', remote('remote'), '/', ref('branch'), '.',
      ],
      shortcut: [ command('gps'), remote('remote'), '--delete', ref('branch') ],
    },
  ],
};

export default branchCommands;
