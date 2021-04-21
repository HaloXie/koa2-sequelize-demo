import { Table, Column, ForeignKey } from 'sequelize-typescript';

import { BaseModel } from '../base';
import { AppUserModel } from './app-user.model';

@Table({
  tableName: 'app_user_ext',
})
export class AppUserExtModel extends BaseModel {
  @ForeignKey(() => AppUserModel)
  @Column({ comment: 'user id' })
  appUserId: string;

  @Column({ comment: '描述' })
  description: string;

  @Column({ comment: 'reference' })
  reference: string;
}

// 常量生成
export class ConstAppUserExt {
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
   * updatedAt
   */
  static readonly UPDATED_AT: string = 'updatedAt';
  /**
   * reference
   */
  static readonly REFERENCE: string = 'reference';
}
