import Koa from 'koa';
import { koaBody } from 'koa-body';
import KoaJson from 'koa-json';

import RouterLoader from './common/RouterLoader'

const app = new Koa();
app.use(koaBody());
app.use(KoaJson());

RouterLoader.routerLoader.init(app)

app.listen(3000, () => {
  console.log('http://127.0.0.1:3000')
})