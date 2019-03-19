import { Command, command, CommandPart, highlight, none } from 'cheatsheet/command';

import { highlight as highlightCmd } from './highlight';

interface HighlightTestCase {
  title: string;

  command: ReadonlyArray<CommandPart>;
  description: ReadonlyArray<CommandPart>;
  shortcut: ReadonlyArray<CommandPart>;

  terms: string[];

  highlightedCommand: ReadonlyArray<CommandPart>;
  highlightedDescription: ReadonlyArray<CommandPart>;
  highlightedShortcut: ReadonlyArray<CommandPart>;
}

const testCases: HighlightTestCase[] = [
  {
    title: 'highlights text for one search term',

    command: [ command('commit'), none(' '), none('-m'), none('message') ],
    description: [ none('Some description.') ],
    shortcut: [ command('gc'), none(' '), none('-m'), none('message') ],

    terms: [ 'message' ],

    highlightedCommand: [ command('commit'), none(' '), none('-m'), highlight('message') ],
    highlightedDescription: [ none('Some description.') ],
    highlightedShortcut: [ command('gc'), none(' '), none('-m'), highlight('message') ],
  },
  {
    title: 'highlights text for partial match',

    command: [ command('commit'), none(' '), none('-m'), none('message') ],
    description: [ none('Some description.') ],
    shortcut: [ command('gc'), none(' '), none('-m'), none('message') ],

    terms: [ 'mes' ],

    highlightedCommand: [ command('commit'), none(' '), none('-m'), highlight('mes'), none('sage') ],
    highlightedDescription: [ none('Some description.') ],
    highlightedShortcut: [ command('gc'), none(' '), none('-m'), highlight('mes'), none('sage') ],
  },
  {
    title: 'highlights text for several search terms',

    command: [ command('commit'), none(' '), none('-m'), none('message') ],
    description: [ none('Some description.') ],
    shortcut: [ command('gc'), none(' '), none('-m'), none('message') ],

    terms: [ 'message', 'description' ],

    highlightedCommand: [ command('commit'), none(' '), none('-m'), highlight('message') ],
    highlightedDescription: [ none('Some '), highlight('description'), none('.') ],
    highlightedShortcut: [ command('gc'), none(' '), none('-m'), highlight('message') ],
  },
];

describe(highlightCmd, () => {
  testCases.forEach((testCase, id) => {
    it(testCase.title, () => {
      const cmdId = `cmd-${id}`;
      const cmd = new Command(cmdId, testCase.command, testCase.description, testCase.shortcut);
      const highlightedCmd = highlightCmd(cmd, testCase.terms);

      expect(highlightedCmd.id).toEqual(cmdId);
      expect(highlightedCmd.command).toEqual(testCase.highlightedCommand);
      expect(highlightedCmd.description).toEqual(testCase.highlightedDescription);
      expect(highlightedCmd.scmBreezeShortcut).toEqual(testCase.highlightedShortcut);
    });
  });
});
