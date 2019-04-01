import { command, ref } from 'cheatsheet/command';

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
      command: [ command('config'), '[--global]', 'option', 'value' ],
      description: [
        'Change a configuration setting. If "--global" option is present, the setting will affect all repositories.',
      ],
    },
    {
      command: [ command('config'), 'alias.<alias_name>', '<cmd>' ],
      description: [
        'Create a Git alias ', command('<alias_name>'), ' for some command. For example, "', command('git config'),
        ' alias.unstage \'reset ', ref('HEAD'), ' --\'', '" will create alias ', command('unstage'), ' which will move',
        ' any changes from the staging area back to the working directory.',
      ],
    },
  ],
};

export default configCommands;
