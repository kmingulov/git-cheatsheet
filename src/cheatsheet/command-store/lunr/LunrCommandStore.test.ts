import { Command, command, CommandGroup, highlight, none } from 'cheatsheet/command';

import { LunrCommandStore } from './LunrCommandStore';

const commitCommand = new Command(
  'cmd-1',
  [ command('commit') ],
  [ none('Commit changes in the staging area.') ],
  [ command('gc') ],
);
const highlightedCommitCommand = new Command(
  'cmd-1',
  [ command('commit') ],
  [ none('Commit '), highlight('changes'), none(' in the staging area.') ],
  [ command('gc') ],
);

const commitMessageCommand = new Command(
  'cmd-2',
  [ command('commit'), none(' '), none('-m'), none('message') ],
  [ none('Commit changes in the staging area with the given message.') ],
  [ command('gc'), none(' '), none('-m'), none('message') ],
);
const highlightedCommitMessageCommand = new Command(
  'cmd-2',
  [ command('commit'), none(' '), none('-m'), none('message') ],
  [ none('Commit '), highlight('changes'), none(' in the staging area with the given message.') ],
  [ command('gc'), none(' '), none('-m'), none('message') ],
);

const logCommand = new Command(
  'cmd-3',
  [ command('log') ],
  [ none('View commit log.') ],
  [ command('gl') ],
);
const highlightedLogCommand = new Command(
  'cmd-3',
  [ highlight('log') ],
  [ none('View commit '), highlight('log'), none('.') ],
  [ command('gl') ],
);

const commitGroup = new CommandGroup('Commit', [ commitCommand, commitMessageCommand ]);
const logGroup = new CommandGroup('Log', [ logCommand ]);

describe(LunrCommandStore, () => {
  const store = new LunrCommandStore([ commitGroup, logGroup ]);

  it('returns all commands', () => {
    const groups = store.getAll();

    expect(groups).toEqual([ commitGroup, logGroup ]);
  });

  it('searches and returns highlighted commands #1', () => {
    const commands = store.search('log');

    expect(commands.length).toEqual(1);
    expect(commands[0]).toEqual(highlightedLogCommand);
  });

  it('searches and returns highlighted commands #2', () => {
    const commands = store.search('changes');

    expect(commands.length).toEqual(2);
    expect(commands[0]).toEqual(highlightedCommitCommand);
    expect(commands[1]).toEqual(highlightedCommitMessageCommand);
  });

  it('searches and returns highlighted commands #3', () => {
    const commands = store.search('log changes');

    expect(commands.length).toEqual(3);
    expect(commands[0]).toEqual(highlightedLogCommand);
    expect(commands[1]).toEqual(highlightedCommitCommand);
    expect(commands[2]).toEqual(highlightedCommitMessageCommand);
  });
});
