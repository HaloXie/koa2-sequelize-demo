import KoaRouter from 'koa-router';
import { AppUserService } from '@/lib';

const router = new KoaRouter();
const { findList, findOne, create, update, destroy } = AppUserService;

router.get('/', async (ctx) => {
  const queries = removeOptional({
    name: ctx.query.name as string,
    limit: ctx.query.limit,
    offset: ctx.query.offset,
  });

  ctx.body = await findList(queries);
});

router.get('/:id', async (ctx) => {
  ctx.body = await findOne(ctx.params.id);
});

router.post('/', async (ctx) => {
  // todo power-guard
  ctx.body = await create(ctx.request.body);
});

router.put('/:id', async (ctx) => {
  ctx.body = await update({ ...ctx.request.body, id: ctx.params.id });
});

router.delete('/:id', async (ctx) => {
  ctx.body = await destroy(ctx.params.id);
});

export default router;
