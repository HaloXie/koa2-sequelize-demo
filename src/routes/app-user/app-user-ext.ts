import KoaRouter from 'koa-router';
import { AppUserExtService } from '@/lib';

const router = new KoaRouter();

const appUserExtService = new AppUserExtService();

router.post('/', async (ctx) => {
  // todo power-guard
  ctx.body = await appUserExtService.create(ctx.request.body);
});

router.put('/:id', async (ctx) => {
  ctx.body = await appUserExtService.update({ ...ctx.request.body, id: ctx.params.id });
});

router.delete('/:id', async (ctx) => {
  ctx.body = await appUserExtService.delete(ctx.params.id);
});

export default router;
