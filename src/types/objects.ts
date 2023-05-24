/** Removes the Nullable option from every key of the given interface.
 * This is handy, for instance, to remove the `Maybe<T>` coming from React-Query generated types.
 * Note this doesn't make them 'Required' ([K]?:T) for more flexibility.
 * To do so, only would need to use NotNull<Required<T>>
 */
export type NotNull<T> = {
  [P in keyof T]: NonNullable<T[P]>;
};

/** Makes a specific group of Keys of an interface NonNullable (the rest will remain the same) */
export type Ensure<T, K extends keyof T> = T & NotNull<Pick<T, K>>;

/** Opposite of `Ensure` utility type.
 * Makes a specific group of Keys of an interface optional (the rest will remain the same)
 */
export type Ignore<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
