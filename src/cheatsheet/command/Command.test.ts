import { Command } from './Command';
import { command, file, none } from './CommandPart';

const COMMAND = [ command('add'), ' ', file('file') ];
const EXPECTED_COMMAND = [ command('add'), none(' '), file('file') ];

const DESCRIPTION = [ 'Add file to the staging area.' ];
const EXPECTED_DESCRIPTION = [ none('Add file to the staging area.') ];

const SHORTCUT = [ command('ga'), ' ', file('file') ];
const EXPECTED_SHORTCUT = [ command('ga'), none(' '), file('file') ];

describe(Command, () => {

  it('is sconstructed', () => {
    const cmd = new Command('id', COMMAND, DESCRIPTION, SHORTCUT);
    expect(cmd.id).toEqual('id');
  });

  it('replaces strings with none CommandPart', () => {
    const cmd = new Command('id', COMMAND, DESCRIPTION, SHORTCUT);

    expect(cmd.id).toEqual('id');
    expect(cmd.command).toEqual(EXPECTED_COMMAND);
    expect(cmd.description).toEqual(EXPECTED_DESCRIPTION);
    expect(cmd.scmBreezeShortcut).toEqual(EXPECTED_SHORTCUT);
  });

  it('accepts null shorcut', () => {
    const cmd = new Command('id', COMMAND, DESCRIPTION);

    expect(cmd.id).toEqual('id');
    expect(cmd.command).toEqual(EXPECTED_COMMAND);
    expect(cmd.description).toEqual(EXPECTED_DESCRIPTION);
    expect(cmd.scmBreezeShortcut).toEqual([]);
  });

});
