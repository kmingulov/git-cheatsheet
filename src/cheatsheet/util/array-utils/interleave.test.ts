import { interleave } from './interleave';

describe(interleave, () => {
  it('doesn\'t change empty array', () => {
    const actual = interleave([], 0);
    expect(actual).toEqual([]);
  });

  it('doesn\'t change array with one element', () => {
    const actual = interleave([1], 0);
    expect(actual).toEqual([1]);
  });

  it('interleaves elements of int array', () => {
    const actual = interleave([1, 2, 3], 0);
    expect(actual).toEqual([1, 0, 2, 0, 3]);
  });

  it('interleaves elements of string array', () => {
    const actual = interleave(['a', 'b', 'c'], ' ');
    expect(actual).toEqual(['a', ' ', 'b', ' ', 'c']);
  });
});
