import { command, file, ref, str } from 'cheatsheet/command';

import { CommandGroupDescriptor } from '../CommandGroupDescriptor';

const commitCommands: CommandGroupDescriptor = {
  id: 'commit',
  title: 'Commiting Changes',

  commands: [
    {
      command: [ command('add'), file('file') ],
      description: [ 'Index a changed/non-tracked file and add it to the staging area.' ],
      shortcut: [ command('ga'), file('file') ],
    },
    {
      command: [ command('rm'), file('file') ],
      description: [ 'Remove tracked file ', file('file'), ' and add this change to the staging area.' ],
      shortcut: [ command('grm'), file('file') ],
    },
    {
      command: [ command('rm'), '--cached', file('file') ],
      description: [ 'Remove ', file('file'), ' added to the staging area.' ],
      shortcut: [ command('grm'), '--cached', file('file') ],
    },
    {
      command: [ command('mv'), file('name'), file('new-name') ],
      description: [
        'Rename tracked file from ', file('file'), ' to ', file('new-name'), ' and add this change to the staging ' +
        'area.',
      ],
    },
    {
      command: [ command('reset'), ref('HEAD'), file('file') ],
      description: [
        'Unstage ', file('file'), ' that was added/removed with ', command('add'), ' or ', command('rm'), ' earlier. ',
        'That is, the file will be moved from the staging area back to the working directory.',
      ],
      shortcut: [ command('grs'), ref('HEAD'), file('file') ],
    },
    {
      command: [ command('checkout'), '--', file('file') ],
      description: [
        'Discard changes made to ', file('file'), ' in the working directory. The file will be replaced by its ' +
        'version in the staging area or at ', ref('HEAD'), '.',
      ],
      shortcut: [ command('gco'), '--', file('file') ],
    },
    {
      command: [ command('commit') ],
      description: [
        'Commit all changes in the staging area. A commit message will be provided via the configured text editor.',
      ],
      shortcut: [ command('gc') ],
    },
    {
      command: [ command('commit'), '-m', str('"Commit message"') ],
      description: [ 'Commit all changes in the staging area with the given commit message.' ],
      shortcut: [ command('gc'), '-m', '"Commit message"' ],
    },
    {
      command: [ command('commit'), '--amend' ],
      description: [
        'Change the last commit (i.e. one to which ', ref('HEAD'), ' points) by adding changes from the staging area ' +
        'and/or changing its message.' ],
      shortcut: [ command('gcm') ],
    },
  ],
};

export default commitCommands;
