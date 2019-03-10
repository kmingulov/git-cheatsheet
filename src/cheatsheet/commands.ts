import { Command } from './command/Command';
import { CommandGroup } from './command/CommandGroup';
import { command, file, ref, remote, url } from './command/CommandPart';

const REPO_URL = url('https://example.com/some-repo');

const BASIC_COMMANDS: CommandGroup = new CommandGroup(
  'Basic Commands',
  [
    new Command(
      [ command('clone'), REPO_URL, file('[dir]') ],
      [ 'Clone an existing repository by its URL to ', file('dir'), '. ',
        'If directory is omitted, the repo will be cloned to ', file('some-repo'), '.' ],
      [ command('gcl'), REPO_URL, file('[dir]') ],
    ),
    new Command(
      [ command('init') ],
      [ 'Initialize a new repository in the current directory.' ],
    ),
    new Command(
      [ command('status') ],
      [ 'Show the current status of the staging area and the working directory.' ],
      [ command('gst') ],
    ),
    new Command(
      [ command('status'), '-s' ],
      [ 'Show the current status of the staging area and the working directory in a short, condenced format.' ],
      [ command('gss') ],
    ),
  ],
);

const CLONE_AND_REMOTES: CommandGroup = new CommandGroup(
  'Clone & Remotes',
  [
    new Command(
      [ command('remote'), '-v' ],
      [ 'List all existing remotes with their URLs.' ],
      [ command('gr') ],
    ),
    new Command(
      [ command('remote'), 'add', remote('some-remote'), REPO_URL ],
      [ 'Add remote ', remote('some-remote'), ' by its URL.' ],
      [ command('gr'), 'add', remote('some-remote'), REPO_URL ],
    ),
  ],
);

const COMMITING_CHANGES: CommandGroup = new CommandGroup(
  'Commiting Changes',
  [
    new Command(
      [ command('add'), file('file') ],
      [ 'Index a changed/non-tracked file and add it to the staging area.' ],
      [ command('ga'), file('file') ],
    ),
    new Command(
      [ command('commit') ],
      [ 'Commit all changes in the staging area. A commit message will be provided via the configured text editor.' ],
      [ command('gc') ],
    ),
    new Command(
      [ command('commit'), '-m', '"Commit message"' ],
      [ 'Commit all changes in the staging area with the given commit message.' ],
      [ command('gc'), '-m', '"Commit message"' ],
    ),
    new Command(
      [ command('commit'), '--amend' ],
      [ 'Change the last commit (i.e. one to which ', ref('HEAD'), ' points) by adding changes from the staging area ' +
        'and/or changing its message.' ],
      [ command('gcm') ],
    ),
  ],
);

const CONFIGURATION: CommandGroup = new CommandGroup(
  'Configuration',
  [
    new Command(
      [ command('config'), '--list' ],
      [ 'List found configuration settings for the current repository.' ],
    ),
    new Command(
      [ command('config'), 'option' ],
      [ 'Show current value for the configuration setting.' ],
    ),
    new Command(
      [ command('config'), '--global', 'option', 'value' ],
      [ 'Change a configuration setting globally, i.e. affecting all repositories.' ],
    ),
  ],
);

const COMMAND_GROUPS: CommandGroup[] = [
  BASIC_COMMANDS,
  CLONE_AND_REMOTES,
  COMMITING_CHANGES,
  CONFIGURATION,
];

export default COMMAND_GROUPS;
