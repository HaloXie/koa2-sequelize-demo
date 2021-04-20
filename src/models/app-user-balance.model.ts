import { Table, Column, ForeignKey, BelongsTo } from 'sequelize-typescript';

import { BaseModel } from '@/base/base.model';
import { AppUserModel } from './app-user.model';
import { AppUserExtModel } from './app-user-ext.model';

export enum EBalanceType {
  /**
   * 收入
   */
  income = 1,
  /**
   * 支出
   */
  expenditure = 2,
}

export type IAppUserBalanceModel = typeof AppUserBalanceModel;

@Table({
  tableName: 'app_user_balance',
})
export class AppUserBalanceModel extends BaseModel {
  @Column({ comment: '金额，目前是小数点12位' })
  amount: number;

  @ForeignKey(() => AppUserExtModel)
  @Column({ comment: 'app-user-ext-id' })
  appUserExtId: string;

  @ForeignKey(() => AppUserModel)
  @Column({ comment: 'app-user-id' })
  appUserId: string;

  @Column({ comment: '描述' })
  description: string;

  @Column({ comment: '流水类型 1增 2减' })
  type: EBalanceType;

  @BelongsTo(() => AppUserModel)
  userInfo: AppUserModel;

  @BelongsTo(() => AppUserExtModel)
  userExtInfo: AppUserExtModel;
}

// 常量生成
export class ConstAppUserBalance {
  /**
   * amount
   */
  static readonly AMOUNT: string = 'amount';
  /**
   * appUserExtId
   */
  static readonly APP_USER_EXT_ID: string = 'appUserExtId';
  /**
   * appUserId
   */
  static readonly APP_USER_ID: string = 'appUserId';
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
   * id
   */
  static readonly ID: string = 'id';
  /**
   * type
   */
  static readonly TYPE: string = 'type';
  /**
   * updatedAt
   */
  static readonly UPDATED_AT: string = 'updatedAt';
}
