import { DB_NAME, DB_USERNAME, DB_PASSWORD, DB_HOST, DB_PORT, isProduction } from '@/config/env';
import { Sequelize } from 'sequelize-typescript';

export const sequelize = new Sequelize({
  dialect: 'mysql',
  host: DB_HOST,
  timezone: '+08:00',
  port: +DB_PORT,
  database: DB_NAME,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  storage: ':memory:',
  // models: [__dirname + '/models/**/*.model.js'],
  modelPaths: [__dirname + `/*.model.${isProduction() ? 'js' : 'ts'}`],
  modelMatch: (filename, member) => member.endsWith('Model'),
  define: {
    timestamps: true, //是否开启时间戳createAt  deleteAt  updateAt
    underscored: true, //下划线
    freezeTableName: true, //禁止sequelize修改表名，默认会在表后边添加一个字母`s`表示复数
    paranoid: true, //开启假删除
    charset: 'utf8',
  },
  // 重写 settings
  dialectOptions: {
    dateStrings: true,
    typeCast: (field: any, next: () => void) => {
      // for reading from database
      if (field.type === 'DATETIME') {
        return field.string();
      }
      return next();
    },
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});
