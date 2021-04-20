'use strict';
const baseModel = require('../base/base-model');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable(
      'app_user_ext',
      {
        ...baseModel,
        app_user_id: {
          type: STRING(50),
          comment: 'user id',
        },
        reference: {
          type: STRING(50),
          comment: '来源, 目前指的是来源系统 application_id',
        },
        description: {
          type: STRING(100),
          comment: '描述',
        },
      },
      {
        comment: '业务用户区块链扩展表',
      },
    );
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('app_user_ext');
  },
};
