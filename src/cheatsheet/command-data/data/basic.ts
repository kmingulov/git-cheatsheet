import { command, file, url } from 'cheatsheet/command';

import { CommandGroupDescriptor } from '../CommandGroupDescriptor';

const REPO_URL = url('https://example.com/some-repo');

const basicCommands: CommandGroupDescriptor = {
  id: 'basic',
  title: 'Basic Commands',

  commands: [
    {
      command: [ command('clone'), REPO_URL, file('[dir]') ],
      description: [
        'Clone an existing repository by its URL to ', file('dir'), '. ',
        'If directory is omitted, the repo will be cloned to ', file('some-repo'), '.',
      ],
      shortcut: [ command('gcl'), REPO_URL, file('[dir]') ],
    },
    {
      command: [ command('init') ],
      description: [ 'Initialize a new repository in the current directory.' ],
    },
    {
      command: [ command('status') ],
      description: [ 'Show the current status of the staging area and the working directory.' ],
      shortcut: [ command('gst') ],
    },
    {
      command: [ command('status'), '-s' ],
      description: [
        'Show the current status of the staging area and the working directory in a short, condenced format.',
      ],
      shortcut: [ command('gss') ],
    },
  ],
};

export default basicCommands;
