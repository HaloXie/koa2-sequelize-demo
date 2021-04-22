import { Model } from 'sequelize-typescript';
declare namespace NodeJS {
  export interface Global {
    assertById: <T extends Model>(model: T, id: number) => Promise<void>;
  }
}

declare const assertById: <T extends Model>(model: T, id: number) => Promise<void>;
