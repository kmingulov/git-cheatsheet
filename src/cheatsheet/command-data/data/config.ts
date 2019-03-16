import { command, str } from 'cheatsheet/command';

import { CommandGroupDescriptor } from '../CommandGroupDescriptor';

const configCommands: CommandGroupDescriptor = {
  id: 'config',
  title: 'Configuration',

  commands: [
    {
      command: [ command('config'), '--list' ],
      description: [ 'List found configuration settings for the current repository.' ],
    },
    {
      command: [ command('config'), 'option' ],
      description: [ 'Show the current value for a configuration setting.' ],
    },
    {
      command: [ command('config'), '--global', 'option', 'value' ],
      description: [ 'Change a configuration setting globally, i.e. affecting all repositories.' ],
    },
  ],
};

export default configCommands;
