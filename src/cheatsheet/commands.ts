import { Command } from './command/Command';
import { CommandGroup } from './command/CommandGroup';
import { command, file, ref, remote, str, url } from './command/CommandPart';

const REPO_URL = url('https://example.com/some-repo');

const BASIC_COMMANDS: CommandGroup = new CommandGroup(
  'Basic Commands',
  [
    new Command(
      'basic-1',
      [ command('clone'), REPO_URL, file('[dir]') ],
      [ 'Clone an existing repository by its URL to ', file('dir'), '. ',
        'If directory is omitted, the repo will be cloned to ', file('some-repo'), '.' ],
      [ command('gcl'), REPO_URL, file('[dir]') ],
    ),
    new Command(
      'basic-2',
      [ command('init') ],
      [ 'Initialize a new repository in the current directory.' ],
    ),
    new Command(
      'basic-3',
      [ command('status') ],
      [ 'Show the current status of the staging area and the working directory.' ],
      [ command('gst') ],
    ),
    new Command(
      'basic-4',
      [ command('status'), '-s' ],
      [ 'Show the current status of the staging area and the working directory in a short, condenced format.' ],
      [ command('gss') ],
    ),
  ],
);

const COMMITING_CHANGES: CommandGroup = new CommandGroup(
  'Commiting Changes',
  [
    new Command(
      'commit-1',
      [ command('add'), file('file') ],
      [ 'Index a changed/non-tracked file and add it to the staging area.' ],
      [ command('ga'), file('file') ],
    ),
    new Command(
      'commit-2',
      [ command('rm'), file('file') ],
      [ 'Remove tracked file ', file('file'), ' and add this change to the staging area.' ],
      [ command('grm'), file('file') ],
    ),
    new Command(
      'commit-3',
      [ command('rm'), '--cached', file('file') ],
      [ 'Remove ', file('file'), ' added to the staging area.' ],
      [ command('grm'), '--cached', file('file') ],
    ),
    new Command(
      'commit-4',
      [ command('mv'), file('name'), file('new-name') ],
      [ 'Rename tracked file from ', file('file'), ' to ', file('new-name'), ' and add this change to the staging ' +
        'area.' ],
    ),
    new Command(
      'commit-5',
      [ command('commit') ],
      [ 'Commit all changes in the staging area. A commit message will be provided via the configured text editor.' ],
      [ command('gc') ],
    ),
    new Command(
      'commit-6',
      [ command('commit'), '-m', str('"Commit message"') ],
      [ 'Commit all changes in the staging area with the given commit message.' ],
      [ command('gc'), '-m', '"Commit message"' ],
    ),
    new Command(
      'commit-7',
      [ command('commit'), '--amend' ],
      [ 'Change the last commit (i.e. one to which ', ref('HEAD'), ' points) by adding changes from the staging area ' +
        'and/or changing its message.' ],
      [ command('gcm') ],
    ),
  ],
);

const DIFF: CommandGroup = new CommandGroup(
  'Diff',
  [
    new Command(
      'diff-1',
      [ command('diff') ],
      [ 'Show diff for all tracked and changed (but not yet staged) files.' ],
      [ command('gd') ],
    ),
    new Command(
      'diff-2',
      [ command('diff'), file('file') ],
      [ 'Show diff for ', file('file'), '.' ],
      [ command('gd'), file('file') ],
    ),
    new Command(
      'diff-3',
      [ command('diff'), '--staged' ],
      [ 'Show diff between the staging area and ', ref('HEAD'), '.' ],
      [ command('gd'), file('--staged') ],
    ),
  ],
);

const LOG: CommandGroup = new CommandGroup(
  'Log',
  [
    new Command(
      'log-1',
      [ command('log') ],
      [ 'Show commit log.' ],
      [ command('gl') ],
    ),
    new Command(
      'log-2',
      [ command('log'), '-p' ],
      [ 'Show diff for each commit.' ],
      [ command('gl'), '-p' ],
    ),
    new Command(
      'log-3',
      [ command('log'), '-3' ],
      [ 'Show only last 3 commits.' ],
      [ command('gl'), '-3' ],
    ),
    new Command(
      'log-4',
      [ command('log'), '--stat' ],
      [ 'Show a brief report on changed files for each commit.' ],
      [ command('gl'), '--stat' ],
    ),
    new Command(
      'log-5',
      [ command('log'), '--pretty[=format]' ],
      [ 'Show commit log with a specified format used for commits. Valid values are: oneline, full, fuller, and ' +
        'format (with a custom format).' ],
    ),
    new Command(
      'log-6',
      [ command('log'), '--graph' ],
      [ 'Show commit graph.' ],
    ),
    new Command(
      'log-7',
      [ command('log'), '--abbrev-commit' ],
      [ 'Show only first several characters of the commit hash instead of all 40.' ],
    ),
    new Command(
      'log-8',
      [ command('log'), '--since=<date>/--after=<date>' ],
      [ 'Show commits made after the given date. A date can be an ISO date (e.g., ', str('"2019-01-01"'), ', ',
        str('"2019-01-01T10:00:00"'), ') or a number with a time unit (e.g., ', str('"10.minutes"'), ', ',
        str('"3.days"'), '). Combinations of several time units are allowed, e.g., ', str('"3.days.12.hours"'), '.' ],
      [ command('gl'), '--since=<date>/--after=<date>' ],
    ),
    new Command(
      'log-9',
      [ command('log'), '--until=<date>/--before=<date>' ],
      [ 'Show commits made before the given date. A date can be an ISO date (e.g., ', str('"2019-01-01"'), ', ',
        str('"2019-01-01T10:00:00"'), ') or a number with a time unit (e.g., ', str('"10.minutes"'), ', ',
        str('"3.days"'), '). Combinations of several time units are allowed, e.g., ', str('"3.days.12.hours"'), '.' ],
      [ command('gl'), '--until=<date>/--before=<date>' ],
    ),
    new Command(
      'log-10',
      [ command('log'), '--author', str('"John Doe"') ],
      [ 'Show commits made by a specific author.' ],
      [ command('gl'), '--author', str('"John Doe"') ],
    ),
    new Command(
      'log-11',
      [ command('log'), '--committer', str('"John Doe"') ],
      [ 'Show commits committed by a specific committer.' ],
      [ command('gl'), '--committer', str('"John Doe"') ],
    ),
    new Command(
      'log-12',
      [ command('log'), '--grep', str('"string"') ],
      [ 'Show commits with messages containing the given string.' ],
      [ command('gl'), '--grep', str('"string"') ],
    ),
    new Command(
      'log-13',
      [ command('log'), '-S', str('"string"') ],
      [ 'Show commits which contain the given string in the changes.' ],
      [ command('gl'), '-S', str('"string"') ],
    ),
    new Command(
      'log-14',
      [ command('log'), '--no-merges' ],
      [ 'Do not show merge commits.' ],
      [ command('gl'), '--no-merges' ],
    ),
  ],
);

const REMOTES: CommandGroup = new CommandGroup(
  'Remotes',
  [
    new Command(
      'remote-1',
      [ command('remote'), '-v' ],
      [ 'List all existing remotes with their URLs.' ],
      [ command('gr') ],
    ),
    new Command(
      'remote-2',
      [ command('remote'), 'add', remote('some-remote'), REPO_URL ],
      [ 'Add remote ', remote('some-remote'), ' by its URL.' ],
      [ command('gr'), 'add', remote('some-remote'), REPO_URL ],
    ),
  ],
);

const CONFIGURATION: CommandGroup = new CommandGroup(
  'Configuration',
  [
    new Command(
      'config-1',
      [ command('config'), '--list' ],
      [ 'List found configuration settings for the current repository.' ],
    ),
    new Command(
      'config-2',
      [ command('config'), 'option' ],
      [ 'Show the current value for a configuration setting.' ],
    ),
    new Command(
      'config-3',
      [ command('config'), '--global', 'option', 'value' ],
      [ 'Change a configuration setting globally, i.e. affecting all repositories.' ],
    ),
  ],
);

const COMMAND_GROUPS: CommandGroup[] = [
  BASIC_COMMANDS,
  COMMITING_CHANGES,
  DIFF,
  LOG,
  REMOTES,
  CONFIGURATION,
];

export default COMMAND_GROUPS;
