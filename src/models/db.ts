import { DB_NAME, DB_USERNAME, DB_PASSWORD, DB_HOST, DB_PORT, TIMEZONE } from '@/config/env';
import { Sequelize } from 'sequelize-typescript';
import _ from 'lodash';

export const sequelize = new Sequelize({
  dialect: 'mysql',
  host: DB_HOST,
  timezone: TIMEZONE,
  port: +DB_PORT,
  database: DB_NAME,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  storage: ':memory:',
  modelPaths: [__dirname + `/*.model.ts`],
  modelMatch: (filename, member) => {
    return _.endsWith(member, 'Model');
  },
  define: {
    timestamps: true,
    paranoid: true,
    charset: 'utf8',
    underscored: true,
    freezeTableName: true,
  },
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
