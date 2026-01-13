

export function match<T, R>(
    value: T,
    patterns: [ (v: T) => boolean, (v: T) => R ][]
  ): R | undefined {
    return patterns.map(([predicate, handle]) => {
        return predicate(value) ? handle(value) : undefined;
    }).find((result): result is R => result !== undefined)
  }