import { Op } from 'sequelize';
import _ from 'lodash';

import { AppUserModel, AppUserExtModel } from '@/models';
import { IAppUserExt } from '@/interfaces';

export const assertExisted = async (id: number) => {
  const _one = await AppUserModel.findOne({
    where: { id },
  });
  !_one && cthrow(400, '需要更新的信息不存在');
};

export const create = async (param: IAppUserExt.ICreateIn) => {
  const _count = await AppUserModel.count({
    where: {
      phone: param.phone,
    },
  });
  _count && _count > 0 && cthrow(400, '提交信息已存在');

  const result = await AppUserModel.create(param);
  return {
    id: result.id,
    state: true,
  };
};

export const update = async (param: IAppUserExt.IUpdateIn) => {
  const _one = await AppUserModel.findOne({
    where: { id: param.id },
  });
  !_one && cthrow(400, '需要更新的信息不存在');

  await AppUserModel.update(param, { where: { id: param.id } });
  return {
    id: param.id,
    state: true,
  };
};

export const destroy = async (id: string) => {
  const _one = await AppUserModel.findOne({
    where: { id },
  });
  !_one && cthrow(400, '需要删除的信息不存在');

  await AppUserModel.destroy({ where: { id } });
  return {
    id,
    state: true,
  };
};
