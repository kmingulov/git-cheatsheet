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
      command: [ command('diff'), '--word-diff', file('[file]') ],
      description: [ 'Show word-by-word diff.' ],
      shortcut: [ command('gdw'), file('[file]') ],
    },
    {
      command: [ command('diff'), '--word-diff-regex=<pattern>', file('[file]') ],
      description: [ 'Show word-by-word diff where each word matches the specified regular expression pattern.' ],
      shortcut: [ command('gd'), '--word-diff-regex=<pattern>', file('[file]') ],
    },
    {
      command: [ command('diff'), '--staged' ],
      description: [ 'Show diff between the staging area and ', ref('HEAD'), '.' ],
      shortcut: [ command('gd'), file('--staged') ],
    },
    {
      command: [ command('diff'), 'master...branch' ],
      description: [ 'Show the changes made in ', ref('branch'), ' since the common ancestor of both branches.' ],
      shortcut: [ command('gd'), 'master...branch' ],
    },
  ],
};

export default diffCommands;
