import { command, CommandPart, none } from 'cheatsheet/command';

import { CommandDescriptor } from './CommandDescriptor';
import { commandFromDescriptor, groupFromDescriptor } from './descriptorConvertors';

const SIMPLE_CMD = [ 'cmd' ];
const EXPECTED_SIMPLE_CMD = [ none('cmd') ];

const CMD_WITH_ARGS = [ command('cmd'), 'some', 'arg' ];
const EXPECTED_CMD_WITH_ARGS = [ command('cmd'), none(' '), none('some'), none(' '), none('arg') ];

const DESCRIPTION = [ 'Some description.' ];
const EXPECTED_DESCRIPTION = [ none('Some description.') ];

const SIMPLE_SHORTCUT = [ 'cm' ];
const EXPECTED_SIMPLE_SHORTCUT = [ none('cm') ];

const SHORTCUT_WITH_ARGS = [ command('cmd'), 'arg' ];
const EXPECTED_SHORTCUT_WITH_ARGS = [ command('cmd'), none(' '), none('arg') ];

describe(commandFromDescriptor, () => {
  interface CommandFromDescriptorTestCase {
    title: string;

    command: Array<CommandPart | string>;
    description: Array<CommandPart | string>;
    shortcut?: Array<CommandPart | string>;

    expectedCommand: CommandPart[];
    expectedDescription: CommandPart[];
    expectedShortcut: CommandPart[];
  }

  const testCases: CommandFromDescriptorTestCase[] = [
    {
      title: 'creates command',

      command: SIMPLE_CMD,
      description: DESCRIPTION,
      shortcut: SIMPLE_SHORTCUT,

      expectedCommand: EXPECTED_SIMPLE_CMD,
      expectedDescription: EXPECTED_DESCRIPTION,
      expectedShortcut: EXPECTED_SIMPLE_SHORTCUT,
    },
    {
      title: 'creates command with no shortcut',

      command: SIMPLE_CMD,
      description: DESCRIPTION,

      expectedCommand: EXPECTED_SIMPLE_CMD,
      expectedDescription: EXPECTED_DESCRIPTION,
      expectedShortcut: [],
    },
    {
      title: 'interleaves command with spaces',

      command: CMD_WITH_ARGS,
      description: DESCRIPTION,
      shortcut: SIMPLE_SHORTCUT,

      expectedCommand: EXPECTED_CMD_WITH_ARGS,
      expectedDescription: EXPECTED_DESCRIPTION,
      expectedShortcut: EXPECTED_SIMPLE_SHORTCUT,
    },
    {
      title: 'interleaves shortcut with spaces',

      command: SIMPLE_CMD,
      description: DESCRIPTION,
      shortcut: SHORTCUT_WITH_ARGS,

      expectedCommand: EXPECTED_SIMPLE_CMD,
      expectedDescription: EXPECTED_DESCRIPTION,
      expectedShortcut: EXPECTED_SHORTCUT_WITH_ARGS,
    },
  ];

  testCases.forEach(testCase => {
    it(testCase.title, () => {
      const cmd = commandFromDescriptor(testCase, 'group', 1);
      expect(cmd.id).toEqual('group-1');
      expect(cmd.command).toEqual(testCase.expectedCommand);
      expect(cmd.description).toEqual(testCase.expectedDescription);
      expect(cmd.scmBreezeShortcut).toEqual(testCase.expectedShortcut);
    });
  });
});

describe(groupFromDescriptor, () => {
  const simpleCmd: CommandDescriptor = {
    command: SIMPLE_CMD,
    description: DESCRIPTION,
    shortcut: SIMPLE_SHORTCUT,
  };

  const createGroup = () => groupFromDescriptor({
    id: 'group',
    title: 'Some Group',

    commands: [ simpleCmd, simpleCmd, simpleCmd ],
  });

  it('creates group with given commands', () => {
    const group = createGroup();
    expect(group.commands.length).toBe(3);
  });

  it('assignes unique IDs to commands', () => {
    const group = createGroup();
    const ids = group.commands.map(cmd => cmd.id);
    expect(ids).toEqual([ 'group-0', 'group-1', 'group-2' ]);
  });
});
