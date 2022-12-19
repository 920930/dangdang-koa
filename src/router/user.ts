import KoaRouter from 'koa-router';
import { Sequelize } from 'sequelize';
import { success, fail } from '../common/result';
import { First } from '../module/class/model/first';
import { Second } from '../module/class/model/second';
import { Third } from '../module/class/model/third';
import { User } from '../module/user/model/user';

const router = new KoaRouter();

router.prefix('/user');

router.get('/', async (ctx) => {
  // 聚合查询
  // await User.findAll({
  //   raw: true,
  //   group: 'address',
  //   attributes: ['address', [Sequelize.fn('count', Sequelize.col('valid')), 'countAddress']]
  // })
  // 以上查询的时间是设定一个分类组address, 限定字段address, 以及聚合统计count出来valid数量，别名为countAddress
  // 原生代码入戏：
  // select address, count('valid') as countAddress from user group by address
  const users = await First.findAll({
    include: [
      {model: Second, include: [{ model: Third}]}
    ]
  })
  ctx.body = success(users)
})
router.post('/store', async (ctx) => {
  const { name, password, address } = ctx.request.body;
  const user = await User.create({
    name, password, address
  })
  ctx.body = success(user)
})
router.get('/:id', async (ctx) => {
  const { id } = ctx.params;
  const user = await User.findOne({
    where: { id },
    raw: true,
  })
  ctx.body = success(user)
})

export default router