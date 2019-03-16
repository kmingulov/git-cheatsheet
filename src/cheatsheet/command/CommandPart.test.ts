import { CommandPart, highlight, none } from './CommandPart';
import { CommandPartType } from './CommandPartType';

describe(none, () => {
  it('wraps given string', () => {
    const actual = none('part');
    const expected = new CommandPart(CommandPartType.NONE, 'part');
    expect(actual).toEqual(expected);
  });
});

describe(highlight, () => {
  it('wraps given string', () => {
    const actual = highlight('part');
    const expected = new CommandPart(CommandPartType.HIGHLIGHT, 'part');
    expect(actual).toEqual(expected);
  });

  it('replaces original wrapping given string', () => {
    const part = none('part');

    const actual = highlight(part);
    const expected = new CommandPart(CommandPartType.HIGHLIGHT, 'part');
    expect(actual).toEqual(expected);
  });
});
