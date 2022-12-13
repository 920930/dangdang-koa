import Koa from 'koa';
import { koaBody } from 'koa-body';
import KoaJson from 'koa-json';

import RouterLoader from './common/RouterLoader';
import errorMiddleware from './middleware/error.middleware';
import { db } from './config/db';

const app = new Koa();
app.use(koaBody());
app.use(KoaJson());

console.log(db.getConfig('portd'))

app.use(errorMiddleware)
RouterLoader.routerLoader.init(app)


app.listen(3000, () => {
  console.log('http://127.0.0.1:3000')
})