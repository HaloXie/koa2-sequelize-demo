type Optional<T> = T | undefined;
type Pickable = Record<string, unknown>;
type NonFalsy<T> = Exclude<T, '' | 0 | false | null | undefined | void | never>;
type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

declare namespace NodeJS {
  export interface Global {
    // env
    isProduction: () => boolean;

    // conditional

    notFalsy: <T>(value: T) => boolean;
    conditional: <T>(exp: T) => Optional<NonFalsy<T>>;

    // object
    removeOptional: (obj: Pickable) => Pickable;
    has: (data: unknown, property: string) => boolean;
    pick: (obj: Pickable, ...args: string[]) => Pickable;

    //
    cthrow: (errCode: number, errMsg: string) => void;
  }
}

// env
declare const isProduction: () => boolean;

// conditional
declare const notFalsy: <T>(value: T) => boolean;
declare const conditional: <T>(exp: T) => Optional<NonFalsy<T>>;

// object
declare const removeOptional: (obj: Pickable) => Pickable;
declare const has: (data: unknown, property: string) => boolean;
declare const pick: (obj: Pickable, ...args: string[]) => Pickable;

//
declare const cthrow: (errCode: number, errMsg: string) => void;
