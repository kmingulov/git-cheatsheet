import { Command, command, CommandPart, file, none } from 'cheatsheet/command';

import { SearchableCommand } from './SearchableCommand';

describe(SearchableCommand, () => {
  interface SearchableCommandTestCase {
    title: string;

    command: CommandPart[];
    description: CommandPart[];
    shortcut: CommandPart[];

    expectedCommand: string;
    expectedDescription: string;
    expectedShortcut: string;
  }

  const testCases: SearchableCommandTestCase[] = [
    {
      title: 'converts command, description, and shorcuts into strings',

      command: [ none('add'), none(' '), none('file') ],
      description: [ none('Add file to the staging area.') ],
      shortcut: [ none('ga'), none(' '), none('file') ],

      expectedCommand: 'add file',
      expectedDescription: 'Add file to the staging area.',
      expectedShortcut: 'ga file',
    },
    {
      title: 'strip all formatting',

      command: [ command('add'), none(' '), file('file') ],
      description: [ none('Add '), file('file'), none(' to the staging area.') ],
      shortcut: [ command('ga'), none(' '), file('file') ],

      expectedCommand: 'add file',
      expectedDescription: 'Add file to the staging area.',
      expectedShortcut: 'ga file',
    },
  ];

  testCases.forEach(testCase => {
    it(testCase.title, () => {
      const cmd = new Command('id', testCase.command, testCase.description, testCase.shortcut);
      const searchableCommand = new SearchableCommand(cmd);

      expect(searchableCommand.id).toEqual('id');
      expect(searchableCommand.command).toEqual(testCase.expectedCommand);
      expect(searchableCommand.description).toEqual(testCase.expectedDescription);
      expect(searchableCommand.scmBreezeShortcut).toEqual(testCase.expectedShortcut);
    });
  });
});
