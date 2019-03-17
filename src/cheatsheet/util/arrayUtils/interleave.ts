export function interleave<T>(array: T[], item: T): T[] {
  return array.reduce(
    (arr, elem, i) => arr.concat(i === 0 ? [ elem ] : [ item, elem ]),
    [] as T[],
  );
}
