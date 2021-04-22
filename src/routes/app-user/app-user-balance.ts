import KoaRouter from 'koa-router';
import { AppUserBalanceService } from '@/lib';
import { removeOptional } from '@/utils/object';

const router = new KoaRouter();

const appUserBalanceService = new AppUserBalanceService();

router.get('/', async (ctx) => {
  const queries = removeOptional({
    name: ctx.query.name as string,
    limit: ctx.query.limit,
    offset: ctx.query.offset,
  });

  ctx.body = await appUserBalanceService.findList(queries);
});

router.get('/:id', async (ctx) => {
  ctx.body = await appUserBalanceService.findOne(ctx.params.id);
});

router.post('/', async (ctx) => {
  // todo power-guard
  ctx.body = appUserBalanceService.create(ctx.request.body);
});

router.put('/:id', async (ctx) => {
  ctx.body = await appUserBalanceService.update({ ...ctx.request.body, id: ctx.params.id });
});

router.delete('/:id', async (ctx) => {
  ctx.body = await appUserBalanceService.delete(ctx.params.id);
});

export default router;
