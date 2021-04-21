import assert from 'assert';

export const removeOptional = (obj: Pickable) => {
  assert(obj && typeof obj === 'object');

  return Object.keys(obj).reduce<Pickable>((prev, key) => {
    !!obj[key] && (prev[key] = obj[key]);
    return prev;
  }, {});
};

export const has = (data: unknown, property: string) =>
  Object.prototype.hasOwnProperty.call(data, property);

export const pick = (obj: Pickable, ...args: string[]): Pickable =>
  args.reduce<Pickable>((acc, key) => {
    acc[key] = obj[key];
    return acc;
  }, {});
