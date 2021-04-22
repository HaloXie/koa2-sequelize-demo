import koa from 'koa';
import http from 'http';

import KoaHelmet from 'koa-helmet';
import bodyParser from 'koa-bodyparser';
import json from 'koa-json';
import KoaLogger from 'koa-logger';
import moment from 'moment';
import * as dotenv from 'dotenv';
dotenv.config();

// 注意这里一定不能使用 @ 标记
import { isProduction } from './config/env';
if (isProduction()) {
  require('module-alias/register');
}

import { sequelize } from '@/models';
import router from '@/routes';

const port = process.env.PORT || 5000;

const app = new koa();
app.use(KoaHelmet());
app.use(bodyParser({ enableTypes: ['json', 'form', 'text'] }));
app.use(json());
app.use(KoaLogger());
app.use(async (ctx, next) => {
  const start = moment();
  await next();
  const ms = moment().diff(start, 'milliseconds');
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = JSON.parse(err.message).errCode;
    ctx.body = err.message;
    ctx.type = 'json';
    ctx.app.emit('error', err);
  }
});
//
app.use(router.routes()).use(router.allowedMethods());

const server = http.createServer(app.callback());
sequelize
  .authenticate()
  .then(() => {
    console.log('DataBase Connection successfully!');
    server.listen(port);
  })
  .catch((err) => {
    throw new Error(`Unable to connect to the database:${err}`);
  });

server.on('error', (error) => {
  const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.name) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
});
server.on('listening', () => {
  const addr = server.address();
  const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr?.port;
  console.log('Listening on ' + bind);
});
