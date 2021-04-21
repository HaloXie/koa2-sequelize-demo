import { BaseService } from '../base';
import { AppUserModel, ConstAppUser } from '@/models';
import { IAppUser } from '@/interfaces';

import _ from 'lodash';

export interface IAppUserService extends AppUserService {}

export class AppUserService extends BaseService {
  async findList(param: IAppUser.IFindListIn) {
    const options: any = {
      where: {},
    };
    options.limit = _.toInteger(param.limit || 0);
    options.offset = _.toInteger(param.offset || 10);

    const list = await AppUserModel.findAndCountAll(options);
    return list;
  }

  /**
   * 用于下拉框绑定
   */
  async bindData() {
    return AppUserModel.findAll({
      attributes: [ConstAppUser.ID],
    });
  }

  /**
   * find the specified one info
   */
  async findOne(id: string) {
    return AppUserModel.findOne({
      where: { id },
      raw: true,
    });
  }

  /**
   * create a new app-user
   */
  async create(param: IAppUser.ICreateIn) {
    // 验证是否存在重复
    const _count = await AppUserModel.count({
      where: {},
    });

    _count && _count > 0 && this.cthrow(511, '提交信息已存在');

    const result = await AppUserModel.create(param);
    return {
      id: result.id,
      state: true,
    };
  }

  /**
   * update a app-user
   */
  async update(param: IAppUser.IUpdateIn) {
    // verify the entity if it is existed
    const _one = await AppUserModel.findOne({
      where: { id: param.id },
    });

    !_one && this.cthrow(511, '需要更新的信息不存在');
    // other validation here

    await AppUserModel.update(param, { where: { id: param.id } });
    return {
      id: param.id,
      state: true,
    };
  }

  /**
   * delete a app-user
   */
  async delete(id: string) {
    // 验证是否存在
    const _one = await AppUserModel.findOne({
      where: { id },
    });

    !_one && this.cthrow(511, '需要删除的信息不存在');
    // other validation here

    await AppUserModel.destroy({ where: { id } });
    return {
      id,
      state: true,
    };
  }
}
