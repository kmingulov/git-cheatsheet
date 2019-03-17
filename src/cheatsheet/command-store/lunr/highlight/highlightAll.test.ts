import { Command, command, highlight, none } from 'cheatsheet/command';

import { highlightAll } from './highlightAll';

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

describe(highlightAll, () => {
  it('highlights all commands', () => {
    const actualCmds = highlightAll([ cmd, otherCmd ], searchTerms);
    expect(actualCmds).toEqual([ highlightedCmd, otherHighlightedCmd ]);
  });
});
