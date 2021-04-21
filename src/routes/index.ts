import KoaRouter from 'koa-router';
import appUserRouter from './app-user/app-user';

const router = new KoaRouter({ prefix: '/api' });
router.use('/app-user', appUserRouter.routes(), appUserRouter.allowedMethods());

export default router;
