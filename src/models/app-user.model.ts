import { Table, Column, HasOne, HasMany, DataType } from 'sequelize-typescript';

import { BaseModel } from '@/base/base.model';
import { AppUserExtModel } from '../models/app-user-ext.model';
import { AppUserBalanceModel } from '../models/app-user-balance.model';

const { INTEGER } = DataType;

export enum EGender {
  /**
   * undefined
   */
  non = 0,
  /**
   * undefined
   */
  man = 1,
  /**
   * undefined
   */
  wom = 2,
}

export type IAppUserModel = typeof AppUserModel;

@Table({
  tableName: 'app_user',
})
export class AppUserModel extends BaseModel {
  @Column({ comment: '用户名' })
  name: string;

  @Column({ comment: '用户真实姓名' })
  realName: string;

  @Column({ comment: '生日' })
  birthday: string;

  @Column({ comment: '性别0未知1男2女[0,1,2]', type: INTEGER })
  gender: EGender;

  @Column({ comment: '邮箱' })
  email: string;

  @Column({ comment: '身份证号' })
  idCard: string;

  @Column({ comment: '手机号' })
  phone: string;

  @Column({ comment: '描述' })
  description: string;

  @HasOne(() => AppUserExtModel)
  extendInfo: AppUserExtModel;

  @HasMany(() => AppUserBalanceModel)
  balanceInfo: AppUserBalanceModel;
}

// 常量生成
export class ConstAppUser {
  /**
   * birthday
   */
  static readonly BIRTHDAY: string = 'birthday';
  /**
   * createdAt
   */
  static readonly CREATED_AT: string = 'createdAt';
  /**
   * deletedAt
   */
  static readonly DELETED_AT: string = 'deletedAt';
  /**
   * description
   */
  static readonly DESCRIPTION: string = 'description';
  /**
   * email
   */
  static readonly EMAIL: string = 'email';
  /**
   * gender
   */
  static readonly GENDER: string = 'gender';
  /**
   * id
   */
  static readonly ID: string = 'id';
  /**
   * idCard
   */
  static readonly ID_CARD: string = 'idCard';
  /**
   * name
   */
  static readonly NAME: string = 'name';
  /**
   * phone
   */
  static readonly PHONE: string = 'phone';
  /**
   * realName
   */
  static readonly REAL_NAME: string = 'realName';
  /**
   * updatedAt
   */
  static readonly UPDATED_AT: string = 'updatedAt';
}
