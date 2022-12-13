import KoaRouter from 'koa-router';

const router = new KoaRouter();

router.prefix('/user');

router.get('/', (ctx) => {
  ctx.body = 'user.indx'
})
router.get('/:id', (ctx) => {
  const { id } = ctx.params;
  ctx.body = id
})

export default router