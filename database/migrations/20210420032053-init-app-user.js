'use strict';
const baseModel = require('../base/base-model');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable(
      'app_user',
      {
        ...baseModel,
        name: { type: STRING(50), comment: '用户名' },
        real_name: { type: STRING(50), comment: '用户真实姓名' },
        birthday: { type: STRING(50), comment: '生日' },
        gender: { type: INTEGER, comment: '性别 0未知 1男 2女' },
        email: {
          type: STRING(200),
          comment: '邮箱',
        },
        id_card: {
          type: STRING(50),
          comment: '身份证号',
        },
        phone: {
          type: STRING(20),
          comment: '手机号',
        },
        description: {
          type: STRING(100),
          comment: '描述',
        },
      },
      {
        comment: '业务用户表',
      },
    );
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('app_user');
  },
};
