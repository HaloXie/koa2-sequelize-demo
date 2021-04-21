import KoaRouter from 'koa-router';
import { AppUserService } from '@/lib';
import { removeOptional } from '@/utils/object';

const router = new KoaRouter();

const appUserService = new AppUserService();

router.get('/', async (ctx) => {
  const queries = removeOptional({
    name: ctx.query.name as string,
    limit: ctx.query.limit,
    offset: ctx.query.offset,
  });

  ctx.body = appUserService.findList(queries);
});

router.get('/{id}', async (ctx) => {
  ctx.body = appUserService.findOne(ctx.params.id);
});

router.post('/', async (ctx) => {
  ctx.body = appUserService.create(ctx.body);
});

router.put('/', async (ctx) => {
  ctx.body = appUserService.update(ctx.body);
});

router.del('/{id}', async (ctx) => {
  ctx.body = appUserService.delete(ctx.params.id);
});

export default router;
