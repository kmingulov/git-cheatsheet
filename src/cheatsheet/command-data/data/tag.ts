import { command, ref, str } from 'cheatsheet/command';

import { CommandGroupDescriptor } from '../CommandGroupDescriptor';

const tagCommands: CommandGroupDescriptor = {
  id: 'tag',
  title: 'Tags',

  commands: [
    {
      command: [ command('tag') ],
      description: [ 'List all tags.' ],
      shortcut: [ command('gt') ],
    },
    {
      command: [ command('tag'), '-l', '<pattern>' ],
      description: [
        'List all tags matching the given pattern. For example, supplying \"v1.4.*\" will result in listing all tags ' +
        'starting with \"v1.4.\".',
      ],
      shortcut: [ command('gt'), '-l', '<pattern>' ],
    },
    {
      command: [ command('tag'), ref('v1.2.3') ],
      description: [
        'Create a lightweight tag pointing to the current ', ref('HEAD'), '. A lightweight tag cannot have a comment. ',
        'To create an annotated tag with a comment, use \'-a\' option (see below).',
      ],
      shortcut: [ command('gt'), ref('v1.2.3') ],
    },
    {
      command: [ command('tag'), '-a', ref('v1.2.3'), '-m', str('\'Tag comment\'') ],
      description: [ 'Create an annotated tag pointing to the current ', ref('HEAD'), '.' ],
      shortcut: [ command('gt'), '-a', ref('v1.2.3'), '-m', str('\'Tag comment\'') ],
    },
  ],
};

export default tagCommands;
