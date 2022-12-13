import KoaRouter from 'koa-router';
import { success, fail } from '../common/result'

const router = new KoaRouter();

router.prefix('/user');

router.get('/', (ctx) => {
  ctx.body = success([{id: 1}, {id: 2}])
})
router.get('/:id', (ctx) => {
  const { id } = ctx.params;
  ctx.body = id
})

export default router