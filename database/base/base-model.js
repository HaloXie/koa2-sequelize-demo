const { DATE, STRING } = require('sequelize');

module.exports = {
  id: { type: STRING(20), primaryKey: true, comment: 'key' },
  // 创建时间
  created_at: { type: DATE, comment: '创建时间' },
  // 更新时间
  updated_at: { type: DATE, comment: '更新时间' },
  // 删除时间
  deleted_at: { type: DATE, comment: '删除时间' },
};
