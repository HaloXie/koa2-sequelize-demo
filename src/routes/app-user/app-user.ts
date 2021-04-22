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

  ctx.body = await appUserService.findList(queries);
});

router.get('/:id', async (ctx) => {
  ctx.body = await appUserService.findOne(ctx.params.id);
});

router.post('/', async (ctx) => {
  // todo power-guard
  ctx.body = appUserService.create(ctx.request.body);
});

router.put('/:id', async (ctx) => {
  ctx.body = await appUserService.update({ ...ctx.request.body, id: ctx.params.id });
});

router.del('/:id', async (ctx) => {
  ctx.body = await appUserService.delete(ctx.params.id);
});

export default router;
