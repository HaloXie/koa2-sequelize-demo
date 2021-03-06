import { Op } from 'sequelize';
import _ from 'lodash';

import { AppUserModel } from '@/models';
import { IAppUser } from '@/interfaces';

export const assertExisted = async (id: number) => {
  const _one = await AppUserModel.findOne({
    where: { id },
  });
  !_one && cthrow(400, '需要更新的信息不存在');
};

export const findList = async (param: IAppUser.IFindListIn) => {
  const options = {
    where: {},
    limit: _.toInteger(param.limit || 10),
    offset: _.toInteger(param.offset || 0),
  };
  if (param.name) {
    options.where = {
      name: { [Op.like]: `%${param.name}%` },
    };
  }

  const list = await AppUserModel.findAndCountAll(options);
  return list;
};

export const findOne = (id: string) =>
  AppUserModel.findOne({
    where: { id },
    raw: true,
  });

export const create = async (param: IAppUser.ICreateIn) => {
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

export const update = async (param: IAppUser.IUpdateIn) => {
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
