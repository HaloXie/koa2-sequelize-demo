import assert from 'assert';
import { Model } from 'sequelize';

// env
export const isProduction = (): boolean => process.env.NODE_ENV === 'production';

// conditional
export const notFalsy = <T>(value: T): value is NonFalsy<T> => !!value;
export const conditional = <T>(exp: T): Optional<NonFalsy<T>> => (notFalsy(exp) ? exp : undefined);

// object
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

// error
export const cthrow = (errCode: number, errMsg: string) => {
  throw new Error(JSON.stringify({ errCode, errMsg }));
};

// db
export const assertById = async <T extends Model>(model: T, id: number) => {
  const _one = await model.$count({
    where: { id },
  });
  !_one && cthrow(400, '需要更新的信息不存在');
};
