/**
 * Interleaves the given array with a specified item. That is, for a given array `a[i]` and item `b` this function
 * returns array `[ a[0], b, a[1], b, a[2], ... ]`.
 *
 * This function always creates a new array and doesn't alter the provided one in any way.
 * @param array array to interleave
 * @param item item
 */
export function interleave<T>(array: T[], item: T): T[] {
  return array.reduce(
    (arr, elem, i) => arr.concat(i === 0 ? [ elem ] : [ item, elem ]),
    [] as T[],
  );
}
