import {
  Table,
  Column,
  Model,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  DataType,
} from 'sequelize-typescript';
import { snowflakeId } from '@/utils/snowflake';
import _ from 'lodash';

const { STRING } = DataType;

@Table
export class BaseModel extends Model<BaseModel> {
  @Column({
    type: STRING(20),
    primaryKey: true,
    autoIncrement: true,
    defaultValue: () => snowflakeId.create(),
  })
  id: string;

  @CreatedAt
  @Column
  createdAt: Date;

  @UpdatedAt
  @Column
  updatedAt: Date;

  @DeletedAt
  @Column
  deletedAt: Date;
}
