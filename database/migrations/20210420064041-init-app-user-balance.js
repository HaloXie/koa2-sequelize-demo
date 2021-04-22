'use strict';
const baseModel = require('../base/base-model');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { DATE, STRING, INTEGER, DECIMAL } = Sequelize;
    await queryInterface.createTable(
      'app_user_balance',
      {
        ...baseModel,
        app_user_id: { type: STRING(20), comment: 'app-user-id' },
        app_user_ext_id: { type: STRING(20), comment: 'app-user-ext-id' },
        type: { type: INTEGER, comment: '流水类型 1增 2减' },
        amount: {
          type: DECIMAL(50, 12),
          comment: '金额，目前是小数点12位',
        },
        description: { type: STRING(100), comment: '描述' },
      },
      {
        comment: '用户金额流水',
      },
    );
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('app_user_balance');
  },
};
