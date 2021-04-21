export const notFalsy = <T>(value: T): value is NonFalsy<T> => !!value;

export const conditional = <T>(exp: T): Optional<NonFalsy<T>> => (notFalsy(exp) ? exp : undefined);
