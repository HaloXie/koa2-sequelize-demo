import _ from 'lodash';
import FlakeId from 'flake-idgen';

const formatter = require('biguint-format');

const idSuffix = Number(process.pid.toString().substr(process.pid.toString().length - 3));
const flakeIdgen = new FlakeId({
  id: 23 + idSuffix, // 只要不超过 24 就可以
  epoch: 1300000000000,
  worker: 0,
});

export const snowflakeId = {
  create() {
    return _.toString(formatter(flakeIdgen.next(), 'dec'));
  },
};
