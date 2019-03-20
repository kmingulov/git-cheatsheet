import { Command, command, highlight, none } from 'cheatsheet/command';

import { highlightCommands } from './highlightCommands';

const cmd = new Command(
  'cmd-1',
  [ command('commit'), none(' '), none('-m'), none('message') ],
  [ none('Some description.') ],
  [ command('gc'), none(' '), none('-m'), none('message') ],
);
const highlightedCmd = new Command(
  'cmd-1',
  [ command('commit'), none(' '), none('-m'), highlight('message') ],
  [ none('Some '), highlight('description'), none('.') ],
  [ command('gc'), none(' '), none('-m'), highlight('message') ],
);

const otherCmd = new Command(
  'cmd-2',
  [ command('log') ],
  [ none('Some description.') ],
  [ command('gl') ],
);
const otherHighlightedCmd = new Command(
  'cmd-2',
  [ command('log') ],
  [ none('Some '), highlight('description'), none('.') ],
  [ command('gl') ],
);

const searchTerms = [ 'message', 'description' ];

describe(highlightCommands, () => {
  it('highlights all commands', () => {
    const actualCmds = highlightCommands([ cmd, otherCmd ], searchTerms);
    expect(actualCmds).toEqual([ highlightedCmd, otherHighlightedCmd ]);
  });
});
