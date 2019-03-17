import { CommandGroup } from 'cheatsheet/command/CommandGroup';
import commands from './commands';

describe('Commands list', () => {
  it('is a list of CommandGroup', () => {
    expect(commands instanceof Array).toBe(true);
    commands.forEach(group => {
      expect(group instanceof CommandGroup).toBe(true);
    });
  });

  it('has no duplicated IDs', () => {
    const allCommands = commands
      .map(group => group.commands)
      .reduce((a, b) => a.concat(b));

    const ids = allCommands.map(command => command.id);
    const uniqueIds = ids.filter((id, index) => ids.indexOf(id) === index);

    expect(uniqueIds).toEqual(ids);
  });
});
