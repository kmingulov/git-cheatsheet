import { command, str } from 'cheatsheet/command';

import { CommandGroupDescriptor } from '../CommandGroupDescriptor';

const logCommands: CommandGroupDescriptor = {
  id: 'log',
  title: 'Log',

  commands: [
    {
      command: [ command('log') ],
      description: [ 'Show commit log.' ],
      shortcut: [ command('gl') ],
    },
    {
      command: [ command('log'), '-p' ],
      description: [ 'Show diff for each commit.' ],
      shortcut: [ command('gl'), '-p' ],
    },
    {
      command: [ command('log'), '-3' ],
      description: [ 'Show only last 3 commits.' ],
      shortcut: [ command('gl'), '-3' ],
    },
    {
      command: [ command('log'), '--stat' ],
      description: [ 'Show a brief report on changed files for each commit.' ],
      shortcut: [ command('gl'), '--stat' ],
    },
    {
      command: [ command('log'), '--pretty[=format]' ],
      description: [
        'Show commit log with a specified format used for commits. Valid values are: oneline, full, fuller, and ' +
        'format (with a custom format).',
      ],
    },
    {
      command: [ command('log'), '--graph' ],
      description: [ 'Show commit graph.' ],
    },
    {
      command: [ command('log'), '--abbrev-commit' ],
      description: [ 'Show only first several characters of the commit hash instead of all 40.' ],
    },
    {
      command: [ command('log'), '--since=<date>/--after=<date>' ],
      description: [
        'Show commits made after the given date. A date can be an ISO date (e.g., ', str('"2019-01-01"'), ', ',
        str('"2019-01-01T10:00:00"'), ') or a number with a time unit (e.g., ', str('"10.minutes"'), ', ',
        str('"3.days"'), '). Combinations of several time units are allowed, e.g., ', str('"3.days.12.hours"'), '.',
      ],
      shortcut: [ command('gl'), '--since=<date>/--after=<date>' ],
    },
    {
      command: [ command('log'), '--until=<date>/--before=<date>' ],
      description: [
        'Show commits made before the given date. A date can be an ISO date (e.g., ', str('"2019-01-01"'), ', ',
        str('"2019-01-01T10:00:00"'), ') or a number with a time unit (e.g., ', str('"10.minutes"'), ', ',
        str('"3.days"'), '). Combinations of several time units are allowed, e.g., ', str('"3.days.12.hours"'), '.',
      ],
      shortcut: [ command('gl'), '--until=<date>/--before=<date>' ],
    },
    {
      command: [ command('log'), '--author', str('"John Doe"') ],
      description: [ 'Show commits made by a specific author.' ],
      shortcut: [ command('gl'), '--author', str('"John Doe"') ],
    },
    {
      command: [ command('log'), '--committer', str('"John Doe"') ],
      description: [ 'Show commits committed by a specific committer.' ],
      shortcut: [ command('gl'), '--committer', str('"John Doe"') ],
    },
    {
      command: [ command('log'), '--grep', str('"string"') ],
      description: [ 'Show commits with messages containing the given string.' ],
      shortcut: [ command('gl'), '--grep', str('"string"') ],
    },
    {
      command: [ command('log'), '-S', str('"string"') ],
      description: [ 'Show commits which contain the given string in the changes.' ],
      shortcut: [ command('gl'), '-S', str('"string"') ],
    },
    {
      command: [ command('log'), '--no-merges' ],
      description: [ 'Do not show merge commits.' ],
      shortcut: [ command('gl'), '--no-merges' ],
    },
  ],
};

export default logCommands;
