type Optional<T> = T | undefined;
type Pickable = Record<string, any>;
type NonFalsy<T> = Exclude<T, '' | 0 | false | null | undefined | void | never>;
type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

declare namespace NodeJS {
  export interface Global {
    removeOptional: (obj: Pickable) => Pickable;
    has: (data: unknown, property: string) => boolean;
    pick: (obj: Pickable, ...args: string[]) => Pickable;
    notFalsy: <T>(value: T) => boolean;
    conditional: <T>(exp: T) => Optional<NonFalsy<T>>;
  }
}
