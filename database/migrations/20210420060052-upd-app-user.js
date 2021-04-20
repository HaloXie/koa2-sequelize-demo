'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { STRING } = Sequelize;
    await queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.changeColumn(
          'app_user',
          'phone',
          {
            type: STRING(100),
            comment: '手机号',
          },
          { transaction: t },
        ),
      ]);
    });
  },

  down: async (queryInterface, Sequelize) => {
    const { STRING } = Sequelize;
    await queryInterface.changeColumn('app_user', 'phone', { type: STRING(20), comment: '手机号' });
  },
};
